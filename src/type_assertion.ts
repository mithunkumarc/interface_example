let message: string = "good morning";
let messageLength: number = message.length;
console.log(messageLength); //no error

let info: any = "good night";
let infoLength: number = (info as string).length;
console.log(infoLength);
