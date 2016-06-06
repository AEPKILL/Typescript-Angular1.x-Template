/// <reference path="./../../typings/tsd.d.ts"/>
/// <reference path="./Application.d.ts"/>

declare namespace __WebpackModuleApi {
    interface RequireFunction {
        (path: string[], callback: (...modules: any[]) => void, errorCallback: Function): void;
    }
}
interface Function {
    $registed: boolean;
}
interface RegisteMe {
    (ngModule: angular.IModule): void;
}

// 自注册Angular模块
interface IAutoModule {
    registeMe: RegisteMe;
}

// 自注册Angular控制器
interface IAutoController extends IAutoModule {
    name: string;
    nickName?: string;
    url: string;
    state: string;
    template: string;
    depends: Array<IAutoModule | Promise<IAutoModule> | any>;
    abstruct: boolean;
}

// app.ts 载入后该值为 true
declare var applicationBootstrap: boolean;
