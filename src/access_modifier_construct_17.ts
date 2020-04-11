// public constructor : class cane be initialized anywhere
// protected : class can be initated within class and in subclass, not outside class
// private : class can be initalized within class

class Dog{
  protected constructor(public name: string){
    
  }
}

class NewDog extends Dog{
  d: Dog = new Dog('hi');//NewDog is subclass of Dog
}
