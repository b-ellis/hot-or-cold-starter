var student = {
  name: "Bradley",
  age: 24,
  birthday: function() {
    this.age++;
  }
};

var student2 = Object.create(student);

student2.name = "Mostafa";
student2.age = 24;

//console.log(student.name);
//console.log(student.age);

console.log(student2.name);
console.log(student2.age);

student2.birthday();

console.log(student2.name);
console.log(student2.age);
