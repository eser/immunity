import compose from 'evangelist/lib/compose';
import iterate from 'evangelist/lib/iterate';
import fromNodeStream from '../fromNodeStream';
import toNodeStream from '../toNodeStream';
import * as fs from 'fs';

test('copy README.md as README.x.md', async () => {
    await iterate(
        fromNodeStream(fs.createReadStream('./README.md'), 512),
        compose(
            (item) => {
                const value = item.data.toString('utf8');

                console.log(value);

                return value;
            },
            toNodeStream(fs.createWriteStream('./README.x.md')),
        ),
    );

    // expect(result).not.toBe(arr1);
});
