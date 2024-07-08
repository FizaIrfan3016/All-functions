// Note : All arguments and parameters are required
// Named function
function add(x, y) {
    return x + y;
}
console.log(add(5, 8)); // giving arguments and calling functions
// Anonymous function
var anonyMous = function (num1, num2) {
    return num1 - num2;
};
console.log(anonyMous(2, 5)); // Giving arguments and log the function.
//Anonymous function with explict type
var myadd = function (x, y) {
    return x + y;
};
console.log(myadd(5, 10)); // giving arguments 
// type names don't matter
var myadd1 = function (x, y) {
    return x + y;
};
console.log(myadd1(34, 6)); //giving arguments to the function 
// Lamda functions
var myadd2 = function (a, b) { return a + b; };
function doSomething(fn) {
    console.log(fn.description, +"returned", fn(6));
}
function myfunc(someArg) {
    return someArg > 3;
}
myfunc.description = "default description";
doSomething(myfunc);
