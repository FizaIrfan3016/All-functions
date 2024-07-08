// Optional Parameters ?
//Named function with optioanal parameters.
function Named(firstName, lastName) {
    if (lastName) {
        return firstName + "" + lastName;
    }
    else {
        return firstName;
    }
}
var result = Named("Ahmed"); // ok
// let result2=Named("ahmed","raza","Saba") // error too many parameters
var result3 = Named("Ahmed", "Raza");
console.log(result);
console.log(result3);
// Anonymous function with optional parameters
var buildName = function (firstName, lastName) {
    if (lastName) {
        return firstName + "" + lastName;
    }
    else {
        return firstName;
    }
};
console.log(buildName("Adams"));
console.log(buildName("Adams", "Jones"));
