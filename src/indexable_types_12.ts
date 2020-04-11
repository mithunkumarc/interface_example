// indexable types : array properties cannot be accessed on this type eg : push splice
interface StringArray{
  [index: number]: number;
}


class Animal{
  name: string;
  constructor(name: string){
    this.name = name;
  }
}
interface AnimalArray{
  [index: number]: Animal;
}

let a1: Animal = new Animal("first");
let a2: Animal = new Animal("second");
let animalArray: AnimalArray = [a1,a2]
console.log(animalArray[0]);
console.log(animalArray[1]);
console.log(Array.isArray(animalArray));
//animalArray.push(new Animal("third")); // error , array properties not available
