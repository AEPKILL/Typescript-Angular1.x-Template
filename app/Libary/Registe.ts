export function Registe(ngModule: angular.IModule, fn: RegisteMe) {
    if (!fn.$registed) {
        fn.call(null, ngModule);
        fn.$registed = true;
    }
}
