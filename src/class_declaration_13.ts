class Greeting{
  constructor(public greeting: string, protected senderName: string, private receiver: string){
  }
}

let g: Greeting = new Greeting("hi","Mithun","Manjunath");

console.log(g.greeting);// public : can be acesses any where
console.log(g.senderName);// protected : within class and subclass, compile err
console.log(g.receiver);// private : within class, compile err
