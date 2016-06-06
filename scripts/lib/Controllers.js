require('colors');
require('typescript-require')({
    exitOnError: false,
    expose: {
        require: function () {
        }
    }
});
const fs = require('fs');
const path = require('path');
const config = require('./../../config');
const controllerPath = `${config.APP_PATH}/Controller`;
const controllers = fs.readdirSync(controllerPath);
const mustProperty = [
    'state',
    'url',
    'name',
    'nickName'
];
const optionProperty = [
    'abstruct'
];
module.exports = controllers.map(e => {
    var tsPath = path.resolve(config.APP_PATH, 'Controller', e, `${e}.ts`);
    var obj = {};
    try {
        var tsModule = require(tsPath);
        mustProperty.forEach(name => {
            if (tsModule[name] === undefined) {
                console.error(`控制器 ${e} 缺少一个必要的导出参数 ${name}`.red);
            } else {
                obj[name] = tsModule[name];
            }
        });
        optionProperty.forEach(name => {
            if (tsModule[name] !== undefined) {
                obj[name] = tsModule[name];
            }
        })
        return obj;
    } catch (e) {
        console.log(`Error:${tsPath}`);
    }
});
