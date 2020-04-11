// only one constructor is allowed
// inner class not allowed
// may be because there is const and readonly, no final keyword in typescript


class Greeting{
  constructor(public greeting: string, protected senderName: string, private receiver: string){
  }
  // constructor(){

  // }
  // class Sample{
    // not allowed
  // }
}
