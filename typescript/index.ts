// ----------------------------------infer types -----------------------------------------------

// infer types (implicit types)


// it automatically assign types

// let userName = "gopika"
// username = 0
//  we cant do this it will show error the username is already in string type so if we asssign number to it it will show error
 


// --------------------------------------------defining types---------------------------------------------------------------------------------

//  Defining types (Explicit Types)

// let userName :string = "gopika";
// let subscribers :number = 3000;
// let isSubscribed : boolean  = true;
// let skills :string[]=["js","css","ts"]
// let count :number[]=[1,2,3,4,5]
// let emptyArray:[]=[]
// let userDetil:{name:string,age:number}={
//     name:"gopika",
//     age:20 
// };

// userDetil.age = 21;  

// --------------------------------------------------------------interface-----------------------------------------------------------


// interface is for reusing property
// interface Details {
//     name:string;
//     age:number;
//     salary: number;
//     getName:()=> void; 
// }
// let userDetil:Details={
//     name:"gopika",
//     age:20,
//     salary :100,
//     getName(){
//         console.log(this.name);
//     }
// };

// let adminDetail:Details={
//     name:"gopika",
//     age:20,
//     salary :100,
//      getName(){
//         console.log(this.name);
//     }
// };

// ----------------------------------------------------------------------------------Type--------------------------------------------------
// similar to interface syntax difference

// type Details={
//      name:string;
//     age:number;
//     salary: number;
//     getName:()=> void; 
// }

// let userDetil:Details={
//     name:"gopika",
//     age:20,
//     salary :100,
//     getName(){
//         console.log(this.name);
//     }
// };



// ----------------------------------------------------------------------------union/optional -------------------------------------

// if i want one value to be number as well as string there we use union

// type Details={
//      name:string;
//     age:number|string;
//     salary: number;
//     getName:()=> void; 
// }

// let userDetil:Details={
//     name:"gopika",
//     age:"20",
//     salary :100,
//     getName(){
//         console.log(this.name);
//     }
// };

// let skills :(string|number)[]=["js","css","ts",1,2,3,4]


// now optional- not mandatroy to give that field 

// type Details={
//      name:string;
//     age:number|string;
//     salary: number;
//     getName?:()=> void; 
// }

// let userDetil:Details={
//     name:"gopika",
//     age:"20",
//     salary :100,
// };


// ------------------------------------------------------------------------------------------functions------------------------------------------------

// type Details={
//      name:string;
//     age:number|string;
//     salary: number;
//     getName:()=> void; 
// }

// let userDetail:Details={
//     name:"gopika",
//     age:"20",
//     salary :100,
//     getName(){
//         console.log(this.name);
//     }
// };


// // you have to give the type of parameter here the type is detail

// function getUserName(userDetail:Details){
//    return userDetail.name;
// }


//  getUserName(userDetail)



// if ther is one or two parameters that is not going to reuse you can give it directly 
// function getUserName({name,age}:{name:string;age:number}){
//    return name;
// }


//  getUserName({name:"gopika",age:20})


//  now we know how to give type to parameters , now we can check how we give type to return value



// -------------------------------


// type Details={
//      name:string;
//     age:number|string;
//     salary: number;
//     getName:()=> void; 
// }

// let userDetail:Details={
//     name:"gopika",
//     age:"20",
//     salary :100,
//     getName(){
//         console.log(this.name);
//     }
// };



// function getUserName(userDetail:Details):string{
//    return userDetail.name;
// }


//  const newValue=getUserName(userDetail)
//  newValue.length

//  here we are assigning it to a variable  because if we call that variable any where it gives methods as suggestions
//  if that contains string it give string , if that contains number it give number


//  if you dont return or return anything we can give void 

// function getUserName(userDetail:Details):void{
//    console.log(userDetail.name);
// }


// getUserName(userDetail)


// if you want you can create costom type 


// type Details={
//      name:string;
//     age:number|string;
//     salary: number;
//     getName:()=> void; 
// }

// let userDetail:Details={
//     name:"gopika",
//     age:"20",
//     salary :100,
//     getName(){
//         console.log(this.name);
//     }
// };


// type GetUserName={
//     name:string;
//     age:number|string;
// }; 

// function getUserName(userDetail:Details):GetUserName{
//    return {name: userDetail.name,age :userDetail.age};
// }


// getUserName(userDetail)




// -------------------------------------------------------------named Types--------------------------------------------------------------

// type StatusType = "pending"|"completed" | "failed" ;

// let currentStatus:StatusType = "completed"

// // from API
// const response ="pending";
// if( response==="pending"){
//     currentStatus ="pending";
// }



