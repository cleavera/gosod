import { LogLevel } from '@cleavera/utils';
import { OneOrMany } from '@cleavera/utils/dist';
import { clean } from './clean';
import { init } from './init';
import { install } from './install';
import { LOGGER } from './logger';
import { pack } from './pack';

export async function packageInstall(paths: OneOrMany<string>, logLevel: LogLevel = LogLevel.INFO): Promise<void> {
    LOGGER.configure(logLevel);
    await init();

    if (!Array.isArray(paths)) {
        paths = [paths];
    }

    const packagePaths: Array<string> = [];

    for (const path of paths) {
        packagePaths.push(await pack(path));
    }

    await install(...packagePaths);

    for (const path of packagePaths) {
        await clean(path);
    }
}
