import { IPromiseResolver } from '@cleavera/utils';
import { load } from 'npm';

export function init(): Promise<void> {
    return new Promise<void>((resolve: IPromiseResolver<void>): void => {
        load({}, () => {
            resolve();
        });
    });
}
