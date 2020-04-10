// never return type used by function which
// doesnt return any value except error

function demo(): never {
  while (true) {}
}

function demo2(): never {
  throw new Error("some error occured");
}

// never return can by inferred by typescript compiler
function demo3() {
  //return Error("some error");
}

//demo(); infinite loop
// try{
//   demo2(); // throws error
// }catch(Error e){}
demo3();
