/// <reference path='./define/define.d.ts' />
import * as angular from 'angular';
import * as angularUiRouter from 'angular-ui-router';
import * as angularMaterial from 'angular-material';
import { init as InitEnvironment } from './InitEnvironment';
import { Registe } from './Libary/Registe';
import { registeMe as Config } from './AppConfig';
import { registeMe as Router } from './Router/Router';
import { registeMe as AppController } from './AppController';

InitEnvironment(() => {
    let app = angular.module('app', [angularUiRouter as string , angularMaterial as string]);
    Registe(app, AppController);
    Registe(app, Config);
    Registe(app, Router);
    angular.bootstrap(document.documentElement, ['app']);
});
