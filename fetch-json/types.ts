const today = new Date();

today.getMonth();

interface Person {
  age: number;
}

const person: Person = {
  age: 20
};

class Color {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

const red = new Color('red');

console.log(red.getName());
