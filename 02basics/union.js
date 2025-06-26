"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "55";
var gopika = { name: "gopika", id: 334 };
gopika = { username: "hc", id: 334 };
// function getDbId(id:number|string){
//     // making some API calls 
//     console.log(`DB id is ${id}`)
// }
getDbId(3);
getDbId("3");
// function getDbId(id:number|string){
//      id.toLowerCase()
// }
// this will show error because the input will be number or string so we gave conditon 
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
// ---------------------------array
// const data : number[]=[1,2,3,"4"]
// const data2 : string[]=[1,2,3,"4"]
// in this both case it will show error 
// const data3 : string[] |number[]=[1,2,3]
// in this it will be like in the array all the one will be number or everyon ewill be string not a mix of both 
var data3 = [1, 2, 3, "4"];
// in this  array we can have number and string as well 
// we can add boolean also 
// let pi:3.14 =3.14
// pi = 3.145
// this will show  error this is more strict that alue only can be the input
var seatAllotment;
seatAllotment = "aisle";
