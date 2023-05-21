//4 вопрос
function bike() {
  console.log(this.name);
}

var name = "ninja";
var obj1 = { name: "pomidor", bike: bike };
var obj2 = { name: "site", bike: bike };

bike();
obj1.bike();
obj2.bike();

//7 вопрос
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person("John");
console.log(typeof member);

//8 вопрос
const person = {
  name: "Valera",
  age: 23,
};

let city = person.city;
city = "Amsterdam";

console.log(person);
console.log(city);
