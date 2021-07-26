// Prototype

function Person(name) {
  this.name = name
}

Person.prototype.greet = function greet() {
  return `Hi, ${this.name}!`
}

function Student(name) {
  this.__proto__.constructor(name)
}

Student.prototype.study = function study() {
  return `${this.name} is studying`
}

Object.setPrototypeOf(Student.prototype, Person.prototype)

const me = new Student("Jeonghan")
console.log(me.greet())
console.log(me.study())

console.log(me instanceof Student)
console.log(me instanceof Person)

const anotherPerson = new Person("Faa")

console.log(anotherPerson instanceof Student)
console.log(anotherPerson instanceof Person)

console.log([] instanceof Array)
console.log([] instanceof Object)
