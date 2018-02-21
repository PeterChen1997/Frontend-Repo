class People {
  constructor(name) {
    this.name = name || 'people'
  }

  print() {
    return `print: ${this.name}`
  }
}

const people = new People('Tom')

console.log (people.name)
console.log (people.print())

class Teacher extends People {
  constructor(name, className) {
    super(name)
    this.class = className
  }
}

const teacher = new Teacher('Peter', 'One Class')
console.log (teacher.name)
console.log (teacher.class)
console.log (teacher.print())
