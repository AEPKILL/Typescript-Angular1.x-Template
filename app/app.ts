class Person {
    public name: string;
    public constructor({name = 'aepkill'}={}){
        this.name = name;
    }
}
console.log(new Person().name);