// function types : Interfaces can also define function types

interface SearchFunction{
  (source: string, searchElement: string): boolean;
}

class MyDocument{
   mysearch: SearchFunction = function(source: string, searchElement: string): boolean{
     return source.includes(searchElement);
   }
}
let result: boolean = new MyDocument().mysearch("its kind of funny story","funny");
console.log(result);
