// Note : All arguments and parameters are required

// Named function

function add (x:number,y:number):number{
    return x+y;
}

console.log(add(5,8)) // giving arguments and calling functions

// Anonymous function

const anonyMous = function(num1:number,num2:number):number{
    return num1 - num2;
}
console.log(anonyMous(2,5)); // Giving arguments and log the function.

//Anonymous function with explict type
 
let myadd:(x:number,y:number) => number = function(x:number,y:number):number{
   return x+y;
}

console.log(myadd(5,10)); // giving arguments 

// type names don't matter

let myadd1:(baseValue:number,increment:number)=>number = function(x:number,y:number):number{
    return x+y;
}

console.log(myadd1(34,6)); //giving arguments to the function 

// Lamda functions

let myadd2=(a:number,b:number) => a+b;

/**type greetFunction=(a:string) => void;
function greeter(fn:greetFunction){
//  ...
 
}*/


type Descriablefunc={
    description:string,
    (someArg : number):boolean
}

function doSomething(fn:Descriablefunc){
    console.log(fn.description, + "returned", fn(6));
    
}

function myfunc(someArg:number){
    return someArg > 3
}
myfunc.description="default description"

doSomething(myfunc)