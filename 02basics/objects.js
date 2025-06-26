"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Gopika",
    email: "gop@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "gopika", isPaid: false, email: "g@gmail.com" };
createUser(newUser);
function createCourse() {
    return { name: "react.js", price: 399 };
}
function createuser(user) {
    return { name: "", email: "", isActive: true };
}
createuser({ name: "", email: "", isActive: true });
