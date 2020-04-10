//Some properties should only be modifiable when an object is first created

interface Printable {
  readonly content: string;
  numberOfPages: number;
}

let data: Printable = { content: "a long story", numberOfPages: 25 };
//data.content = "new story";//error
data.numberOfPages = 30;
console.log(data);

class Rambo {
  readonly password: string;
  constructor(password: string) {
    this.password = password;
  }
}
let r: Rambo = new Rambo("wanderlust");
console.log(r.password);
//r.password = "painkiller";//error
