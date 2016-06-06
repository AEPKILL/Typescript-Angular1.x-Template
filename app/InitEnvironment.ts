/**
 * 初始化环境，加载一些Pollfill及处理其他东西
 * 1. 为 IE 浏览器添加 Promise 支持
 */
function _init(Promise: PromiseConstructor, callback: () => void) {
    (window as any).Promise = Promise;
    callback.call(null);
}
export function init(callback: () => void) {
    if (!(window as any).Promise) {
        console.warn('No Promise');
        require(['Promise'], e => _init(e, callback));
    } else {
        _init(Promise, callback);
    }
}
window.onerror = e => {
    console.log('fuck', e);
};
