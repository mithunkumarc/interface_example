class Animal{
  constructor(public name: string){
    
  }
}
class Dog extends Animal{
  constructor(public name: string){
    super(name);
    //if base class constructor is parameterized, its parameters must be initialized
  }
}
