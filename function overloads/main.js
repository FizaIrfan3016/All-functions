// Overload signatures
function makeDate(mOrTimestamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
var d1 = makeDate(123456);
var d2 = makeDate(5, 5, 5);
var d3 = makeDate(13, 3, 5);
console.log(d1);
console.log(d2);
console.log(d3);
// Declaring this in a function
var user = {
    id: 1234,
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    }
};
console.log(user.admin);
console.log(user.becomeAdmin);
console.log(user.id);
function add(arg1, arg2) {
    return arg1 + arg2;
}
console.log(add("Hello", "World"));
console.log(add(1, 2));
console.log(add(false, true));
