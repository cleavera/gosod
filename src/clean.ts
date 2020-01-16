import { $isNull, IPromiseRejector, IPromiseResolver, Maybe } from '@cleavera/utils';
import { unlink } from 'fs';

export function clean(file: string): Promise<void> {
    return new Promise<void>((resolve: IPromiseResolver<void>, reject: IPromiseRejector): void => {
        unlink(file, (err: Maybe<Error> = null): void => {
            if (!$isNull(err)) {
                reject(err);

                return;
            }

            resolve();
        });
    });
}
