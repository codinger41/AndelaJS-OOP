export class Animal {
  constructor(name, age, legs, species) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;  
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am from the ${this.species} family`;
  }
}

export class Shark extends Animal {
  constructor(name, age, legs = 0, species = "shark") {
    super(name, age, legs, species);
  }
}

export class Cat extends Animal {
  constructor(name, age, legs, species = "cat") {
    super(name, age, legs, species,);
  }
  
  introduce() {
    return super.introduce() + 'meow meow!';
  }
}

export class Dog extends Animal {
  constructor(name, age, master, legs = 4, species = "dog") {
    super(name, age, legs, species);
    this.master = master;
  }
  
  greetMaster() {
    return `Hello, ${this.master}`;
  }
}
 