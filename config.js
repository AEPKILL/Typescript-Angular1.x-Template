const path = require('path');
const copyPaths = [
    'static'
];
exports.APP_PATH = path.resolve(__dirname, 'app');
exports.DIST_PATH = path.resolve(__dirname, 'dist');
exports.MAIN_FILE = path.resolve(exports.APP_PATH, 'index.html');
exports.COPY_PATHS = copyPaths.map(e => ({ from: path.resolve(exports.APP_PATH, e), to: `./${e}` }));
