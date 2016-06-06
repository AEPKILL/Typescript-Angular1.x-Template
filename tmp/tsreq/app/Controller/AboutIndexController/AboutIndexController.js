"use strict";
var style = require('./AboutIndexController.scss');
exports.state = 'About.Index';
exports.url = '/Index';
exports.template = require('./AboutIndexController.html');
exports.name = 'AboutIndexController';
exports.nickName = 'aboutIndex';
exports.depends = [];
var AboutIndexController = (function () {
    /** @ngInject */
    function AboutIndexController() {
        this.style = style;
        this.name = exports.name;
    }
    return AboutIndexController;
}());
exports.AboutIndexController = AboutIndexController;
function registeMe(ngModel) {
    ngModel.controller(exports.name, AboutIndexController);
}
exports.registeMe = registeMe;
