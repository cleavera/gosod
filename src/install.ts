import { $isNull, IPromiseRejector, IPromiseResolver, Maybe } from '@cleavera/utils';
import { commands, config } from 'npm';
import { LOGGER } from './logger';

export function install(path: string): Promise<void> {
    return new Promise<void>((resolve: IPromiseResolver<void>, reject: IPromiseRejector): void => {
        config.set('save', false);

        commands.install([path], (error: Maybe<Error> = null): void => {
            if (!$isNull(error)) {
                reject(error);

                return;
            }

            LOGGER.info(`Installed`);

            resolve();
        });
    });
}
