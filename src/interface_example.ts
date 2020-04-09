//to see output in console , include current
// typescript file in index.html

// creating custom type using interface
interface Person {
  name: string;
  age: number;
  //interface functions are abstract
  speak(words: string): void;
}
// creating obj which of type person
let vijay: Person = {
  name: "karan",
  age: 32,
  speak: (words: string): void => {
    console.log(words, " speaking");
  }
};

function makePersonSpeak(human: Person): void {
  human.speak("johny mera naam");
}

makePersonSpeak(vijay);
