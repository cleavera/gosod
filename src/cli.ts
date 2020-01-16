#!/usr/bin/env node

//tslint:disable no-console

import { LogLevel } from '@cleavera/utils/dist';
import { run } from './run';

const { _: paths, logLevel }: { _: Array<string>, logLevel: keyof LogLevel } = require('yargs') //tslint:disable-line no-require-imports no-var-requires
    .usage('Usage: $0 [paths] --log-level=[level=info]')
    .option('log-level', {
        alias: 'L',
        choices: [
            LogLevel[LogLevel.ERROR].toLowerCase(),
            LogLevel[LogLevel.WARN].toLowerCase(),
            LogLevel[LogLevel.INFO].toLowerCase(),
            LogLevel[LogLevel.DEBUG].toLowerCase(),
            LogLevel[LogLevel.SILLY].toLowerCase()
        ],
        string: true,
        default: 'info'
    })
    .string()
    .argv;

(async(): Promise<void> => {
    for (const path of paths) {
        await run(path, LogLevel[logLevel.toUpperCase() as any] as any); //tslint:disable-line no-any
    }
})();
