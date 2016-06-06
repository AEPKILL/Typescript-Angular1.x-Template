const path = require('path');
const fs = require('fs');
const config = require('./../../config.js');
module.exports = function (name) {
    var dName = name;
    if (typeof name != 'string') {
        throw new Error('Please Enter Controller Name');
    }
    name = name.toLowerCase().replace(/\w/, a => a.toUpperCase());
    var targetPath = path.resolve(config.APP_PATH, 'Directive', `${name}`);
    var tstemplate =
`const style = require('./${name}.scss');
export function registeMe(ngModule: angular.IModule) {
    ngModule.directive('${dName}', ${name}Directive);
}
class Controller {
    public style = style;
    public constructor() {

    }
}
function linkFunc() {
    
}
/** @ngInject */
function ${name}Directive(): angular.IDirective {
    return {
        restrict: 'AE',
        template: require('./${name}.html') as string,
        controller: Controller,
        controllerAs: '${ dName}',
        link: linkFunc
    };
}

`;
    var htmlTemplate = `<h1>Directive:${dName}</h1>`;
    var scssTemplate = `@charset "utf-8";\n`;
    if (!fs.existsSync(targetPath)) {
        fs.mkdirSync(targetPath);
    }
    fs.writeFileSync(path.resolve(targetPath, `${name}.ts`), tstemplate);
    fs.writeFileSync(path.resolve(targetPath, `${name}.html`), htmlTemplate);
    fs.writeFileSync(path.resolve(targetPath, `${name}.scss`), scssTemplate);
};