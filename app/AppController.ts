const style = require('./AppController.scss');
class AppController {
    public style = style;
    /** @ngInject */
    public constructor() {
    }
}
export const name = 'AppController';
export function registeMe(ngModule: angular.IModule) {
    ngModule.controller(name, AppController);
}
