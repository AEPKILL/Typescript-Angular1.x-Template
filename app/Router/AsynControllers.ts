/** 使用命名行 npm run makeRI 自动生成该文件 ， 非特殊情况不要尝试手动修改 */
class ControlelrMap {
    public get HomeController() {
        return new Promise<IAutoController>(r => { require(['./../Controller/HomeController/HomeController.ts'], e => r(e)); });
    }
    public get HomeIndexController() {
        return new Promise<IAutoController>(r => { require(['./../Controller/HomeIndexController/HomeIndexController.ts'], e => r(e)); });
    }
}
export const controllers = new ControlelrMap();

