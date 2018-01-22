import iterate from 'evangelist/lib/iterate';
import fromNodeStream from './fromNodeStream';
import * as fs from 'fs';

iterate(
    fromNodeStream(fs.createReadStream('./README.md')),
    item => {
        console.log(item.data.toString('utf8'));
    },
);
