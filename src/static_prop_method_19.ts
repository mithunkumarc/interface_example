// similar to java

class PercentageCalculator{
  static d:any = {};//static object can be created but within a class
  static multiplier: number = 100;
  result: number;
  constructor(public numerator: number, public denominator: number){
    this.result = (this.numerator/this.denominator) * PercentageCalculator.multiplier;
  }
  static demomethod(){
    console.log('parent static');
  }
}
class AdvancedCalculator extends PercentageCalculator{
  //below property will replace parent 
  //static multiplier: number = 105;
  
  // below method will replce , static method inheriting from parent
  // static demomethod(){
  //   console.log("child method");
  // }
}
let p:PercentageCalculator = new PercentageCalculator(40,60);
console.log(p.result);
//static properties are inherited , but it can be replaced
console.log(AdvancedCalculator.multiplier);
AdvancedCalculator.demomethod();//parent
