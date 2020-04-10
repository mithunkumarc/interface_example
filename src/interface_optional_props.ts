interface Box {
  color?: string; // color is optional
  length: number;
  breadth: number;
  height: number;
}

let box1: Box = { color: "red", length: 32, breadth: 3, height: 92 };
let box2: Box = { length: 43, breadth: 3, height: 32 }; // error : missing mandatory props breadth and height
//let box3: Box = { length: 43 } //error , no mandatory prop defined

let boxList: Box[] = [];

function storeBox(box: Box) {
  boxList.push(box);
}

storeBox(box1);
storeBox(box2);
console.log(boxList);
