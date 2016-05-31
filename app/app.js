class Person {
    constructor({ name: string = 'aepkill' } = {}) {
        this.name = name;
    }
}
console.log(new Person().name);
