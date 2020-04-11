// inheritance : prop are inherited for reuse


class Animal{
  constructor(public name: string){
    //johny value overrided by red
    this.name = 'red';
  }
}
class Dog extends Animal{
  //default constructor is either empty(partent class)
  //or if it is child class, constructor is similar to what parent has(number of parameters)
}
let d: Dog = new Dog("jonny");
console.log(d.name);//red
d.name = 'conny';
console.log(d.name);//conny
let a:Animal = d;
console.log('animal name',a.name);//conny



// class MorningGreeting extends Greeting{
//   constructor(){
//     super("some");
//   }
// }
