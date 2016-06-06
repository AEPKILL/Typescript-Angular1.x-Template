var style = require('./HomeController.scss');
export const state = 'Home';
export const url = '/';
export const template = require('./HomeController.html');
export const name = 'HomeController';
export const nickName = 'home';

export const depends = [
    require('./../../Directive/red/red'),
    new Promise(r => { require(['./../../Directive/Nav/Nav'], e => r(e)); })
];

export class HomeController {
    public name = name;
    public style = style;
    /** @ngInject */
    public constructor() {
        
    }
}
export function registeMe(ngModel) {
    ngModel.controller(name, HomeController);
}