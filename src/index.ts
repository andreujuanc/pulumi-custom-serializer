import { spawn } from 'child_process'
import fs from 'fs';
import path from 'path';
import { locate } from 'func-loc';
import { SerializeFunctionArgs, SerializedFunction } from '@pulumi/pulumi/runtime/closure/serializeClosure'
import * as pulumi from "@pulumi/pulumi";

type SerializeFunction = (func: Function, args?: SerializeFunctionArgs) => Promise<SerializedFunction>;


export default function applySerialzier() {
    pulumi.runtime.serializeFunction = newSerializer;
}

export const newSerializer: SerializeFunction = async (func, args) => {
    try {
        const result = await locate(func as any);

        const dependencies = readDependencies();
        const externalFlat = dependencies.flatMap(x => ['--external', x])


        const text = await new Promise<string>(function (resolve, reject) {
            const buffer: string[] = []

            const process = spawn(`node_modules/bun/bin/bun`,
                ['build', '--entrypoints', result.path,
                    '--sourcemap=inline', // inline, none, external
                    '--target', 'node', // browser, bun, node
                    '--format', 'esm', //esm, cjs, iife
                    ...externalFlat
                ])

            process.stderr.on('data', (data) => {
                reject(data.toString())
            })

            process.stdout.on('data', (data) => {
                buffer.push(data)
            })

            process.on('close', (code) => {
                if (code !== 0) {
                    reject(`Bun exited with code ${code}`)
                } else {
                    resolve(buffer.join(''))
                }
            })

            process.on('disconnect', () => {
                reject('Bun exited unexpectedly')
            })

        })

        return {
            text: text,
            exportName: args?.exportName ?? 'handler',
            containsSecrets: false,
        }
    } catch (e: unknown) {
        console.error('MAIN', (e as any).message ?? e)
        throw e
    }
}


const readDependencies = (): string[] => {
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    const packageJsonData = fs.readFileSync(packageJsonPath, 'utf-8');
    const packageJsonObj = JSON.parse(packageJsonData) ?? {};

    if (packageJsonObj.pulumi?.customSerializer?.includeDependencies === false)
        return []
    if (Array.isArray(packageJsonObj.pulumi?.customSerializer?.includeDependencies))
        return packageJsonObj.pulumi?.customSerializer?.includeDependencies

    return packageJsonObj.dependencies ? Object.keys(packageJsonObj.dependencies) : [];
};