"use strict";
var style = require('./LoginController.scss');
exports.state = 'Login';
exports.url = '/Login';
exports.template = require('./LoginController.html');
exports.name = 'LoginController';
exports.nickName = 'login';
exports.depends = [
    new Promise(function (r) { require(['./../../Directive/red/red'], function (e) { return r(e); }); }),
    new Promise(function (r) { require(['./../../Directive/Nav/Nav'], function (e) { return r(e); }); })
];
var LoginController = (function () {
    /** @ngInject */
    function LoginController() {
        this.name = exports.name;
        this.style = style;
    }
    return LoginController;
}());
exports.LoginController = LoginController;
function registeMe(ngModel) {
    ngModel.controller(exports.name, LoginController);
}
exports.registeMe = registeMe;
