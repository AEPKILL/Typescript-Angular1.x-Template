export function registeMe(ngModule: angular.IModule) {
    ngModule.config(config);
    /** @ngInject */
    function config($controllerProvider: any, $compileProvider: any, $filterProvider: any, $provide: any) {
        ngModule.controller = $controllerProvider.register;
        ngModule.directive = $compileProvider.directive;
        ngModule.filter = $filterProvider.register;
        ngModule.factory = $provide.factory;
        ngModule.service = $provide.service;
        ngModule.value = $provide.value;
    }
}
