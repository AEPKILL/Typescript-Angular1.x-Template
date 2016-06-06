const path = require('path');
const fs = require('fs');
const fsPlus = require('fs-extra');
const config = require('./../config');

if (fs.existsSync(config.DIST_PATH)) {
    fsPlus.removeSync(config.DIST_PATH);
    console.log('Clean Success');
} else {
    console.warn('Don\'t need clean');
}