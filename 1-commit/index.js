var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');
var dog = new Dog('bau');
var tom = new Cat();
var mouse = new Mouse ('Mickey');

try {
    tom.eat(dog)

} catch (error) {
    console.log('Error while cat eating a dog')
}

console.log(tom)