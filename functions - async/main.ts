// Asynchronous function  -> Callback queue
// Synchronous function   -> Call stack


// functions call-signature type
const greeting=(message:string) => console.log(`Hello ${message}`);

interface definitionInterface {
    (message:string):void
}

function sayHello (callBack:definitionInterface){
    callBack("World")
}
sayHello(greeting) // Output Hello World

//Inside call back function
function mycallBack(text:string){
    console.log("Inside callback" + text);
}

function callingFunction(initialText:string,callback:(text:string)=>void){
    callback(initialText)
}
callingFunction("my Text",mycallBack) //Output Inside callbackmy Text

// Interface practice with callback function

interface callBackOneparameter<typeOne,typeTwo=void>{
    (param1:typeOne):typeTwo;
}

function greet(message:string){
    return `${message} how are you doing?`
}
function sayhello(greet:callBackOneparameter<string,string>){
    let message=greet('Hi Ibrahim')
    console.log(message);
    
}

sayhello(greet)

