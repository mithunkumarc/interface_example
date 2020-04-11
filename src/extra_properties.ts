interface Laptop {
  color?: string;
  price?: number;
  [propName: number]: any; //any number of properties allowed whose property type is number
}

let lenovo: Laptop = { 4: "color", 123: "serial number" };
console.log(lenovo);

//error : brand string property not allowed
//let hp: Laptop = {color:"white", brand:"hp"};
