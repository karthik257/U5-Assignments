function Teacher(gender, qualification) {
  this.gender = gender;
  this.qualification = qualification;
}

function Person(name, subject, gender, qualification) {
  this.name = name;
  this.subject = subject;
  Teacher.call(this, gender, qualification);
}

let person1 = new Person("Karthik", "Math", "Male", "B.Tech");
let person2 = new Person("Sharath", "Science", "Male", "M.Tech");
let person3 = new Person("Katherine", "History", "Female", "B.Ed");

console.log(person1);
console.log(person2);
console.log(person3);
