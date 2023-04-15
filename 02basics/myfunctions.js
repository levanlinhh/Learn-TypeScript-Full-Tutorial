"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    //return "hello"
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
};
loginUser("VanLinh", "Vanlinh.it.hutech@gmail.com");
signUser("Van Linh", "Vanlinh.it.dev@gmail.com", false);
getUpper("LeVanLinh");
addTwo(5);
