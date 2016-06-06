require('colors');
const path = require('path');
const fs = require('fs');
const config = require('./../../config.js');
module.exports = function (name) {
    if (typeof name != 'string') {
        throw new Error('Please Enter Controller Name');
    }
    if (!(/^\w+$/).test(name)) {
        console.log(` Controller name (${name}) valid`.red);
        return;
    }
    name = name.replace(/\w/, a => a.toUpperCase());
    var state = name.replace(/[A-Z]/g, (a, b) => {
        if (b !== 0) {
            return `.${a}`;
        }
        return a;
    });
    var url = name.match(/[A-Z][a-z]*$/)[0];
    var targetPath = path.resolve(config.APP_PATH, 'Controller', `${name}Controller`);
    var nickName = name.replace(/\w/, a => a.toLowerCase());
    var tstemplate =
`var style = require('./${name}Controller.scss');

export const state = '${state}';
export const url = '/${url}';
export const template = require('./${name}Controller.html');
export const name = '${name}Controller';
export const nickName = '${nickName}';
export const depends = [];

export class ${name}Controller {
    public style = style;
    public name = name;
    /** @ngInject */
    public constructor() {
    }
}
export function registeMe(ngModel) {
    ngModel.controller(name, ${name}Controller);
}

`;
    var htmlTemplate = `<h1 ng-bind='${nickName}.name'></h1>`;
    var scssTemplate = `@charset "utf-8";\n`
    if (!fs.existsSync(targetPath)) {
        fs.mkdirSync(targetPath);
    }
    fs.writeFileSync(path.resolve(targetPath, `${name}Controller.ts`), tstemplate);
    fs.writeFileSync(path.resolve(targetPath, `${name}Controller.html`), htmlTemplate);
    fs.writeFileSync(path.resolve(targetPath, `${name}Controller.scss`), scssTemplate);
    require('./../MakeRouterInfo');
};