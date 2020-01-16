import { $isNull, IPromiseRejector, IPromiseResolver, Maybe } from '@cleavera/utils';
import { commands } from 'npm';
import { LOGGER } from './logger';

export function pack(path: string): Promise<string> {
    return new Promise<string>((resolve: IPromiseResolver<string>, reject: IPromiseRejector): void => {
        commands.pack([path], (error: Maybe<Error> = null, [{ filename, id }]: Array<{ filename: string, id: string }>): void => {
            if (!$isNull(error)) {
                reject(error);

                return;
            }

            LOGGER.info(`Packaged: ${id}`);

            resolve(filename);
        });
    });
}
