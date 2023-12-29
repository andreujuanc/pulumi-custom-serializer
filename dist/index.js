"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newSerializer = void 0;
const child_process_1 = require("child_process");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const func_loc_1 = require("func-loc");
const pulumi = __importStar(require("@pulumi/pulumi"));
function applySerialzier() {
    pulumi.runtime.serializeFunction = exports.newSerializer;
}
exports.default = applySerialzier;
const newSerializer = async (func, args) => {
    try {
        const result = await (0, func_loc_1.locate)(func);
        const dependencies = readDependencies();
        const externalFlat = dependencies.flatMap(x => ['--external', x]);
        const text = await new Promise(function (resolve, reject) {
            const buffer = [];
            const process = (0, child_process_1.spawn)(`node_modules/bun/bin/bun`, ['build', '--entrypoints', result.path,
                '--sourcemap=inline',
                '--target', 'node',
                '--format', 'esm',
                ...externalFlat
            ]);
            process.stderr.on('data', (data) => {
                reject(data.toString());
            });
            process.stdout.on('data', (data) => {
                buffer.push(data);
            });
            process.on('close', (code) => {
                if (code !== 0) {
                    reject(`Bun exited with code ${code}`);
                }
                else {
                    resolve(buffer.join(''));
                }
            });
            process.on('disconnect', () => {
                reject('Bun exited unexpectedly');
            });
        });
        return {
            text: text,
            exportName: args?.exportName ?? 'handler',
            containsSecrets: false,
        };
    }
    catch (e) {
        console.error('MAIN', e.message ?? e);
        throw e;
    }
};
exports.newSerializer = newSerializer;
const readDependencies = () => {
    const packageJsonPath = path_1.default.join(process.cwd(), 'package.json');
    const packageJsonData = fs_1.default.readFileSync(packageJsonPath, 'utf-8');
    const packageJsonObj = JSON.parse(packageJsonData) ?? {};
    if (packageJsonObj.pulumi?.customSerializer?.includeDependencies === false)
        return [];
    if (Array.isArray(packageJsonObj.pulumi?.customSerializer?.includeDependencies))
        return packageJsonObj.pulumi?.customSerializer?.includeDependencies;
    return packageJsonObj.dependencies ? Object.keys(packageJsonObj.dependencies) : [];
};
//# sourceMappingURL=index.js.map