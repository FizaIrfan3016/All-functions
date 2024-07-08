// Named function with default parameters
//Note giving a default value to parametrs
function buildname(firstName, lastName) {
    if (lastName === void 0) { lastName = "khan"; }
    if (lastName) {
        return firstName + "" + lastName;
    }
    else {
        return firstName;
    }
}
var result = buildname("Adam"); // its ok
// let result1=buildname("Adams","Bob","sun")// error too many parametrs
var result2 = buildname("Adams", "KHAN");
console.log(result);
console.log(result2);
// Anonymous function with default parameters
var buildName = function (firstName, lastName) {
    if (lastName === void 0) { lastName = "Thakur"; }
    if (lastName) {
        return firstName + "" + lastName;
    }
    else {
        return firstName;
    }
};
console.log(buildName("Adams"));
console.log(buildName("Adams", "thakur"));
