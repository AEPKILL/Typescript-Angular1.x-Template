"use strict";
var style = require('./HomeIndexController.scss');
exports.state = 'Home.Index';
exports.url = '/Index';
exports.template = require('./HomeIndexController.html');
exports.name = 'HomeIndexController';
exports.nickName = 'homeIndex';
exports.depends = [];
var HomeIndexController = (function () {
    /** @ngInject */
    function HomeIndexController() {
        this.style = style;
        this.name = exports.name;
    }
    return HomeIndexController;
}());
exports.HomeIndexController = HomeIndexController;
function registeMe(ngModel) {
    ngModel.controller(exports.name, HomeIndexController);
}
exports.registeMe = registeMe;
