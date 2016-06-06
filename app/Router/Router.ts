import { controllers } from './AsynControllers';
import { Registe } from './../Libary/Registe';

// <RouterInfo.json> 文件使用 npm run makeRI 自动生成， 基本不需要手动更改
const RouterInfo = <Array<IAutoController>>require('./RouterInfo.json');

export function registeMe(ngModule: angular.IModule) {
    var states: { [index: string]: angular.ui.IState } = {};
    RouterInfo.forEach(c => {
        states[c.state] = {
            url: c.url,
            templateProvider: ['__resolve__', e => e],
            controller: c.name,
            controllerAs: c.nickName,
            abstract: c.abstruct === undefined ? false : c.abstruct,
            resolve: {
                __resolve__: () => (<Promise<IAutoController>>controllers[c.name]).then(m => {
                    var depends: Array<IAutoModule> = [m],
                        asynDepends: Array<Promise<IAutoModule>> = [];
                    if (angular.isArray(m.depends)) {
                        for (let i = 0, l = m.depends.length; i < l; i++) {
                            let depend = <Promise<IAutoModule>>m.depends[i];
                            if (typeof depend.then === 'function') {
                                asynDepends.push(depend);
                            } else if (typeof (depend as any).registeMe === 'function') {
                                depends.push(depend as any);
                            } else {
                                console.error('不是一个有效的依赖项', depend);
                            }
                        }
                    }
                    // 处理同步依赖
                    for (let i = 0, l = depends.length; i < l; i++) {
                        Registe(ngModule, depends[i].registeMe);
                    }
                    return new Promise(r => {
                        // 处理异步依赖将异步转换为同步,
                        // 因为异步依赖也有先后顺序，所以需要顺序注册，但为了效率先全部请求载入
                        if (asynDepends.length > 0) {
                            let depends: Array<{ index: number, m: IAutoModule }> = [],
                                check = () => {
                                    if (depends.length === asynDepends.length) {
                                        depends.sort((a, b) => a.index - b.index).forEach(e => {
                                            Registe(ngModule, e.m.registeMe);
                                        });
                                        r(m.template);
                                    }
                                };
                            for (let i = 0, l = asynDepends.length; i < l; i++) {
                                asynDepends[i].then(m => {
                                    depends.push({
                                        index: i,
                                        m: m
                                    });
                                    check();
                                });
                            }
                        } else {
                            r(m.template);
                        }
                    });
                })
            }
        };
    });
    ngModule.config(InitRouter);
    /** @ngInject */
    function InitRouter($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
        Object.keys(states).forEach(e => {
            $stateProvider.state(e, states[e]);
        });
        $urlRouterProvider.otherwise('/');
    }
}
