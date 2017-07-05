import { assign } from 'ponyfills/lib/assign';

export function removeFirstMatchFromArray(instance: Array<any>, predicate: (value: any, index: number, array: Array<any>) => any): Array<any> {
    let notFound = true;

    return instance.filter(
        (itemValue, itemKey, obj) => {
            if (notFound && predicate(itemValue, itemKey, obj)) {
                notFound = false;

                return false;
            }

            return true;
        }
    );
};

export default removeFirstMatchFromArray;
