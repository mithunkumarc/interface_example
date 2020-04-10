// if we dont know type of object

function processData(data: any): void {
  console.log("processing data : ", data);
}

processData(123);
processData(true);
processData({});
processData(["hello", 234] as [string, number]); //array becomes tuple

let notSure: any = "windmill";
notSure = 4;
console.log(notSure);
console.log(typeof notSure); //number
//drawback no typecheck
// below will lead ur runt time error
//no compile error
notSure.runner();

// let nothingSure: object = {};
// nothingSure.runner();
