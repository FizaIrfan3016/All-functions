// Rest parameters
function buildName(firstName) {
    var restOfname = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfname[_i - 1] = arguments[_i];
    }
    return firstName + "" + restOfname.join("");
}
var employeName = buildName("John", "Raza", "Bilal", "Simra", "Maheen");
console.log(employeName);
//Anonymous function type with rest parameters
var buildname = function (fname) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return fname + "" + rest.join("");
};
console.log(buildName("joseph", "Maheen", "khan", "noor"));
