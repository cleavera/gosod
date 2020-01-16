import { LogLevel } from '@cleavera/utils';
import { clean } from './clean';
import { init } from './init';
import { install } from './install';
import { LOGGER } from './logger';
import { pack } from './pack';

export async function run(path: string, logLevel: LogLevel = LogLevel.INFO): Promise<void> {
    LOGGER.configure(logLevel);
    await init();
    const packagePath: string = await pack(path);
    LOGGER.info(packagePath);
    await install(packagePath);
    await clean(packagePath);
}
