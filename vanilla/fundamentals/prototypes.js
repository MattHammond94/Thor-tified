// Prototypes are specific to JS.
// All JS Objects have a hidden internal prototype property.
// Objects can be extended and will inherit the properties and methods on Prototype of their constructor.
// These prototypes can be chained and each aditional object will inherit everythin in the chain.
// Object.prototype is at the end of the prototype chain and is where all created object instances INHERIT from
// When a method is called if the method does not exist on the active Object JS will search the Objects prototype. If not match is found then null is returned.
// PROTOTYPE:

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

const player1 = new Player('MattyMoo', 'X');
const player2 = new Player('MattyMooTwo', 'O');

console.log(Player.prototype);
console.log(Object.getPrototypeOf(player1));

console.log(Object.getPrototypeOf(player1) === Player.prototype);

// We can declare a function to a prototype allowing access to all

Player.prototype.sayHello = function() {
  console.log("Hello, I'm a player!");
};

player1.sayHello();
player2.sayHello();
console.log(Player.prototype);

// Functions that belong to the Object prototype can be used by objects that inherit from this prototype such as Player:
// This is refered to as Prototypal inheritance.
console.log(player1.valueOf());
console.log(player1.hasOwnProperty('valueOf'));
console.log(Object.prototype.hasOwnProperty('valueOf'));
console.log(Object.prototype.hasOwnProperty('hasOwnProperty'));

// Every prototype object inherits from Object.prototype by default.

// Setting a prototype of:
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log(`Hello, I'm ${this.name}!`);
};

console.log("Player objects prototype pre set prototype:");
console.log(Object.getPrototypeOf(Player.prototype));
Object.setPrototypeOf(Player.prototype, Person.prototype);
console.log("Player objects prototype after the set prototype function is called:");
console.log(Object.getPrototypeOf(Player.prototype));

console.log('Created a Player that now inherits the functions of Person:')
const player3 = new Player('Ronnie');
const person1 = new Person('Some guy')
console.log('SayName is inherited from the Player Prototype:')
console.log(player3.sayName());
console.log('SayHello is defined on the player prototype:')
console.log(player3.sayHello()); 
// console.log(person1.sayHello());  => Persons cannot access sayHello.

//An alternate (but now deprectiated approach):
let x = {}

console.log(x.__proto__); // Returns the Object prototype from where this new Object it inherits.
console.log(x.__proto__.__proto__); // Returns null as this is the end of the prototype chain