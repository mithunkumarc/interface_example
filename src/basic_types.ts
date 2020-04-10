console.log("1.boolean type");
let isDone: boolean = true;
console.log(typeof isDone, isDone);
const isCompleted: boolean = false;
console.log(typeof isCompleted, isCompleted);
console.log("*".repeat(40));
console.log("2.number (int and float)");
let count: number = 100;
console.log(typeof count, count);
const percentage: number = 34.33;
console.log(typeof percentage, percentage);
console.log("*".repeat(40));
console.log("3.string : use single or double quotes");
const city: string = "arjuna";
console.log(typeof city, city);
let address: string = "first street";
console.log(typeof address, address);
console.log("*".repeat(40));
console.log("4.template strings (not type)");
const user_name: string = "abhinith";
let msgTemplate = `
hello Mr. ${user_name} , welcome
your score is ${75 / 100} out of 1
`;
console.log("template : ", msgTemplate);

console.log("5.Array");
const words: string[] = ["pet", "set", "bet"];
words.push("yet");
console.log("words", words, "total", words.length);
console.log("generic array type: Array<type>");
const cities: Array<string> = ["filmcity", "greecity"];
console.log(cities);
console.log("*".repeat(40));
//fixed number of elements whose types are known
console.log("6.tuple, like immutable list, types are known with order");
let bag: [string, number] = ["book", 34];
console.log("tuple : ", bag, "first element : ", bag[0]);
console.log("*".repeat(40));
console.log("enum : user defined type(constants");
enum Colors {
  RED,
  GREEN,
  BLUE
}
//default index of enum starts from zero
console.log("value of Colors.RED ", Colors.RED);
let red: Colors = Colors.RED;
console.log("value of var red : ", red);
// index can be customized
enum Codes {
  YES = 1,
  NO = 2
}
console.log("enum codes : ", Codes);
let code: string = Codes[2];
console.log("Codes[2] : ", code);
console.log("enum: use values to get its index, and index to get value");

console.log("*".repeat(40));
