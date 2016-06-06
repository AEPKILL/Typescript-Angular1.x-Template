const style = require('./Nav.scss');
export function registeMe(ngModule: angular.IModule) {
    ngModule.directive('nav', NavDirective);
}
class Controller {
    public style = style;
    public constructor() {

    }
}
function linkFunc() {
    
}
/** @ngInject */
function NavDirective(): angular.IDirective {
    return {
        restrict: 'AE',
        template: require('./Nav.html') as string,
        controller: Controller,
        controllerAs: 'nav',
        link: linkFunc
    };
}

