//void vs undefined
//function return type void:
//no return type is required

//undefined:
//function return type undefined:
//return type is required

//absence of any datatype is void
let n: void = undefined;
console.log("n", n);

function demo1(): void {}

demo1();

//if return type is neither void not any should return stamentment
function demo2(): undefined {
  return;
}

demo2();
