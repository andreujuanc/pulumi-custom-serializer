
import * as pulumi from "@pulumi/pulumi";
import * as example from '../api/handler'
import fs from 'fs'

import applySerializer from "..";
applySerializer();

(async () => {
    const handlerName = 'example_handler'

    const closure = await pulumi.runtime.serializeFunction(
        example.example_handler
        , {
            serialize: _ => true,
            exportName: handlerName,
            isFactoryFunction: false,
            allowSecrets: true,
        });

    const exampleOutputDir = `${__dirname}/../../lambdas`
    fs.mkdirSync(exampleOutputDir, { recursive: true })
    fs.writeFileSync(`${exampleOutputDir}/${closure.exportName}.js`, closure.text)

    return closure
})()


