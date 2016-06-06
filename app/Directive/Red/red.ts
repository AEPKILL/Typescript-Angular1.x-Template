const style = require('./red.scss');
export function registeMe(ngModule: angular.IModule) {
    ngModule.directive('red', RedDirective);
}
class Controller {
    public style = style;
    public constructor() {

    }
}
function linkFunc() {
    
}
/** @ngInject */
function RedDirective(): angular.IDirective {
    return {
        restrict: 'AE',
        template: require('./red.html') as string,
        controller: Controller,
        controllerAs: 'red',
        link: linkFunc
    };
}
