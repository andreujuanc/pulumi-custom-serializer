import { SerializeFunctionArgs, SerializedFunction } from '@pulumi/pulumi/runtime/closure/serializeClosure'
import * as pulumi from "@pulumi/pulumi";
import Bun from 'bun';
import { readdir } from "node:fs/promises";

// NextJS-like file system routing bundle made with Bun

// Traverse the src/api directory and create a map of all the files extracted from the directory, and their respective paths

const paths = await readdir('src/api',{ recursive: true, withFileTypes: true}).then(files => {
    return files.flatMap(file => {
        if(file.isDirectory()){
            return []
        } else {
            return `src/api/${file.name}`
        }
    })  
})

console.log(paths)

for(const path of paths){
    console.log(await Bun.file(path).text())
}

const getRelativePath = (from: string, to: string) => {
    return from.split('/').slice(2).map(() => '..').join('/') + '/' + to
}

// for each file in the map, create a new file with the same name in the out directory, exporting the default function from the file
const tmp = '.tmp'
for(const path of paths){
    await Bun.write(`${tmp}/${path}`, `
    import handler from '${getRelativePath(`./${tmp}/${path}`, path)}'
    export default handler
    `)
}



const result = await Bun.build({
    entrypoints: paths.map(path => `./${tmp}/${path}`),
    target: 'node',
    format: 'esm',
    sourcemap: 'inline',
    outdir: './out',
})

console.log(result)
