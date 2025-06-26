// -------------------------------------------------------function Overloading------------------------------------------------------------

// function add ( num1:number|string,num2:number|string):number|string{
//     if(typeof num1 ==="string"|| typeof num2 ==="string"){
//         return num1+""+num2
//     }
//     return num1+num2;
// }

// add(2,2);//4
// add("2","2")  //22


// to solve this problem we use overloading

// function add (num1:number,num2:number):number;
// function add(num1:string,num2:string):string;
// function add ( num1:any,num2:any):any{
//     return num1+num2;
// }

// add(2,2);//4
// add("2","2")  //22

// this is function overloading


// now this is also not common to use

//  so we use generics instead

// -----------------------------------------------------------------------------------------generics------------------------------------------------------------

// function getAge<T>(age:T):T{
//         return age;
// }


// getAge<string>("20")
// getAge<number>(20)

// -------------------------------------------------

// type UserDetail ={
//     name :string;
//     age:number;
// };
// type AdminDetail ={
//     firstName :string;
//     role:string;
// };

// const userDetail ={
//     name:"Gopika",
//     age:20,
// }
// const adminDetail ={
//     firstName:"shamnad",
//     role:"admin",
// }
// function getDetails<T>(details:T)T{
//     return details
// }

// const userValue = getDetails<UserDetail>(userDetail)
// const adminValue = getDetails<AdminDetail>(adminDetail)

// -------------------------------------------------------------------------------------------------------------------------extends--------------------------------


// to combine two types


// type UserDetail ={
//     name :string;
//     age:number;
// };
// type AdminDetail = UserDetail &{
//     role:string;
// };

// const userDetail ={
//     name:"Gopika",
//     age:20,
// }
// const adminDetail ={
//     name:"shamnad",
//     age:20,
//     role:"admin",
// }



// you can also assign type only 
// type AdminDetail = UserDetail
// -----------------------------------------------------------
// same thing in  interface

// interface UserDetail {
//     name :string;
//     age:number;
// };



// interface AdminDetail extends UserDetail {
//     role:string;
// };

// const userDetail ={
//     name:"Gopika",
//     age:20,
// }
// const adminDetail ={
//     name:"shamnad",
//     age:20,
//     role:"admin",
// }


// interface  will only take object 
//  but value will take object as well as value



// ----------------------------------------------------------------------------------------------------Enums---------------------------------------------------------------

// type StatusType ="pending"|"completed"|"failed";

// enum StatusType{
//     PENDING,
//     COMPLETED,
//     FAILED,
// }


// // WE CAN ALSO USE CONST BEFORE ENUM BUT MAXIMUM AVOID USING IT 

// // IT WILL START FROM 0 IF WE WANT TO START FROM 1 JUST ASSIGN PENDING =1 JUST ONLY ASSIGN 1 IT WILL AUTOMATICALLY INCREMENT 
// // IF YOU WANT STRINGS THEN ASSIGN STIRNGS LIKE PENDING ="pending",COMPLETED="COMPLETED"...



// function getStatus(orderId:string,status:StatusType){
//     console.log(orderId,"==",status);
// }

// getStatus("12345",StatusType.COMPLETED)


// --------------------------------------------------------------------------------------------------------------as const --------------------------------------------------------------------

// let userName = "gopika" as const;

// userName ="gopika"

// instead of using const in js 

// ------------------------------------------------------------------------------------keyof typeof-------------------------------------------------------------------------------------------------------------

//  const StatusType={
//     PENDING:"pending",
//     COMPLETED:"completed",
//     FAILED:"failed",
// }


// function getStatus(orderId:string,status:keyof typeof StatusType){
//     console.log(orderId,"==",StatusType[status]);
// }

// getStatus("12345","COMPLETED")



// type of is used to create type and key of is used to take values from the object 
                  


// --------------------------------------------------------------------------------------utility types---------------------------------------------------------------------------


// type Users ={
//     name:String;
//     age:number;
// };

// const userDetails: Readonly<Users> ={
//     name:"gopika",
//     age:20,
// };
// userDetails.name = "media";
// here we use readonly so we cant update the name 

//----------------------- partial for optional 


// const userDetails: Partial<Users> ={
//     name:"gopika",
//     age:20,
// };

// some are optional bust specific case it is required so how we handle that we handle it using required



// const userDetails: Required<Users> ={
//     name:"gopika",
//     age:20,
// };


// now there is a case we need to extend but not need every property here in this there is name and age we only need name 

// const user: Pick<Users,"name"> ={
//     name:"gopika",
// };

// if there is more field then write it like "name"|"age" ...like this 

// now there is a case like only one of them i dont need other property's i need so i cant write it using union 
// there we use omit


// const user: Omit<Users,"age"> ={
//     name:"gopika",
// };



// in case of union use exclude not use omit or pick

// type StatusType ="pending"|"completed"|"failed";
// const status :Exclude<StatusType,"pending"> = "";



// -----------------------------------------------------------------------------record------------------------------------------------------------

// type Food={
//     KFC:string;
//     PIZZA:String;
//     CHICKEN:String;
// }


// --------------------------------------
// type Food = Record<string,string>;

// const food :Food ={
//     PIZZA :"SADAD",
//     CHICKEN:{
//         SDS:"HGFH",
//     },
// };

// -------------------------------------------------------------------------------any /unknown/never/void/null------------------------------------------------------------------

//    if  we use any it will it willbe like javascript we can give any type of value so instead of that we can give unknown

// let userName:unknown= "gopika"// data being fetched from api;

//  typecasting 

// const newValue = userName as string

//  now this will be string


// ---------------------------------never---------------------------

// function throwError(message:string):never{
//     throw new Error(message);
// }

//  never we use when we dont retrun anything like we throw an error or when infinite loop or some thing came 

// function logMessage(message:string):void{
//     console.log(message);
// }


//  callback function  that returns nothing or you call one function inside another function  in that case you use void

// type User={
//     name:string;
//     getUserName:()=>string;  // this says that this function retuurn string 
// }


// const currentObj :User ={
//     name: "gopika",
//     getUserName (){
//         return ("hello")
//     }
// }

// ---------------------------------
// type User={
//     name:string;
//     getUserName:(message:string)=>void;  // this says that this function retuurn string 
// }


// const currentObj :User ={
//     name: "gopika",
//     getUserName (messagae){
//         console.log(message)
//     },
// };

// currentObj.getUserName("fghjkjh")

// ------------------------------------------------null------------------------------


// let  userName :string|null=null;

// function get(){
//     if(userName){
//         return "gfsds"
//     }else if(userName===null){
//         return "yhnfghj"
//     }
// }