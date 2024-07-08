// Asynchronous function  -> Callback queue
// Synchronous function   -> Call stack
// functions call-signature type
var greeting = function (message) { return console.log("Hello ".concat(message)); };
function sayHello(callBack) {
    callBack("World");
}
sayHello(greeting); // Output Hello World
//Inside call back function
function mycallBack(text) {
    console.log("Inside callback" + text);
}
function callingFunction(initialText, callback) {
    callback(initialText);
}
callingFunction("my Text", mycallBack); //Output Inside callbackmy Text
function greet(message) {
    return "".concat(message, " how are you doing?");
}
function sayhello(greet) {
    var message = greet('Hi Ibrahim');
    console.log(message);
}
sayhello(greet);
