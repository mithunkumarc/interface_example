//Typescript core principle
//type checking focus on duck typeing/structural subtyptin

/*

function printUser(user: { name: string }) {
  console.log(user.name);
}
printUser({ name: "jaggu." });

*/

//above code can be replaced by
interface User {
  name: string;
}

function printUser(user: User) {
  console.log(user.name);
}

printUser({ name: "kirthi" });
