var style = require('./HomeIndexController.scss');

export const state = 'Home.Index';
export const url = '/Index';
export const template = require('./HomeIndexController.html');
export const name = 'HomeIndexController';
export const nickName = 'homeIndex';
export const depends = [];

export class HomeIndexController {
    public style = style;
    public name = name;
    /** @ngInject */
    public constructor() {
    }
}
export function registeMe(ngModel) {
    ngModel.controller(name, HomeIndexController);
}

