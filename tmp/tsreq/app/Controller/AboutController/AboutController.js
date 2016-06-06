"use strict";
var style = require('./AboutController.scss');
exports.state = 'About';
exports.url = '/About';
exports.template = require('./AboutController.html');
exports.name = 'AboutController';
exports.nickName = 'about';
exports.depends = [require('./../../Directive/red/red')];
exports.abstruct = true;
var AboutController = (function () {
    /** @ngInject */
    function AboutController() {
        this.name = exports.name;
        this.style = style;
    }
    return AboutController;
}());
exports.AboutController = AboutController;
function registeMe(ngModel) {
    ngModel.controller(exports.name, AboutController);
}
exports.registeMe = registeMe;
