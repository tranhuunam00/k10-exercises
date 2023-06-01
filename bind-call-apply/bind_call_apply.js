// bind là 1 function nằm trong function.prototype
// chỉ có function mới gọi được bind
// this của bind sẽ là đối số đầu tiên của bind
const student = {
  name: "Khuong",
  getName() {
    return this.name;
  },
};
const className = {
  name: "ABCD",
};
console.log(student.getName()); // Khuong
const username = student.getName.bind(className);
// student.getName : lấy thằng con getName của thằng cha student
// getName.bind : cho nó đi lấy vợ className
// this ở đây sẽ là className và phương thức getName sẽ tìm ở trong thằng className có thằng nào key là name
// và console.log thằng đấy ra
console.log(username()); // ABCD

// call : gọi hàm
function Age() {
  console.log(22);
}
Age(); //22
Age.call(); //22
const Todo = {
  todo1: "Quét nhà",
  todo2: "Lau nhà",
};
const TodoList = {
  todo1: "Quét nhà xong",
  todo2: "Lau nhà xong",
  getTodo() {
    console.log(this.todo1 + this.todo2);
  },
};
TodoList.getTodo.call(Todo);
// this của call sẽ là đối số đầu tiên của call

// apply : cho phép gọi một hàm và truyền đối số cho hàm gốc dưới một mảng
const subject = {
  maths: "toán",
  literature: "văn",
};
function teacher(message) {
  return this.maths + " " + this.literature + " " + message;
}
let apply = teacher.apply(subject, ["hóa, ..."]);
// this của apply sẽ là đối số đầu tiên của apply
console.log(apply);

//  deep copy and shallow copy
// shallow copy là làm thay đổi giá trị ban đầu của phần tử
// deep copy là copy giá trị của phần tử khác mà không làm thay đổi giá trị của phần tử đó
const person1 = {
  name: "khuong",
  todo: {
    todo1: "Lau nhà",
  },
};
const person2 = person1;
person2.name = "hoang";
person2.todo.todo1 = "Quét nhà";

let person3 = Object.assign({}, person1); // chỉ có thế copy những phần tử con, đã làm thay đổi thằng cháu =>> shallow copy
person3.name = "nam";
person3.todo.todo1 = "Rửa bát";
const person4 = { ...person1 }; // =>> chỉ có thế copy những phần tử con, đã làm thay đổi thằng cháu =>> shallow copy
person4.name = "hai";
person4.todo.todo1 = "đi bơi";

console.log("shallow copy: " + person1.name + " " + person1.todo.todo1);
console.log("shallow copy: " + person2.name + " " + person2.todo.todo1);
console.log("deep copy: " + person3.name + " " + person3.todo.todo1);
console.log("deep copy: " + person4.name + " " + person4.todo.todo1);

// deep copy

const person6 = {
  name: "Nguyễn Đa Khương",
  todo: {
    todo1: "Lau nhà",
  },
};
const person5 = JSON.parse(JSON.stringify(person6));
// => chuyển person6 sang json rồi parse về dạng obj thì person5 sẽ được tạo như 1 obj mới không liện quan đến person6
person5.name = "Nguyễn Văn A";
person5.todo.todo1 = "Đi học";
console.log("Giá trị ban đầu: " + person6.name + " " + person6.todo.todo1);
console.log("Giá trị Shallow copy: " + person5.name + " " + person5.todo.todo1);

// node.js là đơn luồng
