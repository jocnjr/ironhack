let car = {
  name: 'Knight Industries Two Thousand',
  isOn: false,
  sayMyName: function() {
    console.log("My name is " + this.name);
  },
  start: () => {
    this.isOn = true;
    console.log(this.isOn);
  },
  stop: () => {
    this.isOn = false;
    console.log(this.isOn);
  }
}

car.sayMyName();
// => My name is Knight Industries Two Thousand

car.start();
// => now isOn === true

car.stop();


class Car {
  constructor(name) {
    this.name = name;
    this.sayMyName = () => {
      console.log(`My name is ${this.name}`);
  }
 
  };
};

const landau = new Car('Ford Landau');
const tesla = new Car('Tesla Model S');

landau.sayMyName();
tesla.sayMyName();

var kitt = {
  name: 'Knight Industries Two Thousand',
  sayMyName: function() {
    console.log("My name is " + this.name);
  }
};

var modelS = {
  name: 'Tesla Model S SuperCar',
  sayMyName: function() {
    console.log("My name is " + this.name);
  }
};

kitt.sayMyName();
modelS.sayMyName();


//ES6

class Animal {
  constructor(name, owner, sound) {
    this.name = name;
    this.owner = owner;
    this.sound = sound;
  }

}

class Dog extends Animal {
  constructor(name, owner) {
    super(name, owner);
    this.sound = "Guau Guau";
    this.humanRelation = "love";
  }

  makeSound(){
    return `The sound I make is: ${this.sound}`;
  }
}

var myAnimal = new Animal("Arya", "Josephine", "--");
var myDog = new Dog("Max",  "Owen");

console.log(myAnimal);
console.log(myDog);
console.log(myDog.makeSound());