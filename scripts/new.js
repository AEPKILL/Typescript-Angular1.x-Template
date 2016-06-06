const newController = require('./new/controller');
const newDirective = require('./new/directive')
const operate = process.argv[2];
const name = process.argv[3]
switch(operate.toLowerCase()){
    case 'controller':
    case 'c':{
        newController(name)
        break;
    }
    case 'directive':
    case 'd':{
        newDirective(name);
        break;
    }

}