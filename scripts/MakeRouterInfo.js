const fs = require('fs');
const path = require('path');
const config = require('./../config');
const controllers = require('./lib/Controllers');
const jsonPath = path.resolve(config.APP_PATH, 'Router', 'RouterInfo.json');
const ctrsPath = path.resolve(config.APP_PATH, 'Router', 'AsynControllers.ts');
fs.writeFileSync(jsonPath, JSON.stringify(controllers));
fs.writeFileSync(ctrsPath,
`/** 使用命名行 npm run makeRI 自动生成该文件 ， 非特殊情况不要尝试手动修改 */
class ControlelrMap {
${ controllers.map(e=>{
        var template = 
`    public get ${e.name}() {
        return new Promise<IAutoController>(r => { require(['./../Controller/${e.name}/${e.name}.ts'], e => r(e)); });
    }`
                return template;
    }).join('\n') }
}
export const controllers = new ControlelrMap();

`
);