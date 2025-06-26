
// -----------------------------------Type-------------------------------

// let age :number = 21
// let Name : string = "Gopika"



// --------------

// type age =number
// let myAge :age =21


// -------------------------------------------Object Type------------


// Object Type

// type Person={
//     name:string;
//     age:number;

// }

// const user:Person={
//     name:"gopika",
//     age:21
// }

// -----------------------------------------union Type-----------------------------------------

// this is literal types 



// type Status = "success" | "error" | "loading";


// let currentStatus :Status ="success";


// ---------------

// let age :string|number =20



//  -----------------------------------------function Type------------------------------------------------

// type Greet =(name:string)=>string;

// const sayHello:Greet=(name)=>{
//     return `Hello,${name}`;
// }


// ----------------------------------------type with intersection -----------------------------------------------

// type Name ={
//     name:string
// }
// type Age={
//     age:number
// }

// type Person = Name & Age&{
//     job?:boolean
// };

// const person:Person={
//     name:"gopika",
//     age:21
// }


// ----------------------------------------------type with union --------------------------------------------------------------

// type age = number|string;

// let myage = "21"


// ---------------------------------------------------literal types -----------------------------------------------------------------

// type Direction = "left" | "right" | "up" | "down";

// let move: Direction = "up";


// -------------------------------------------------------Readonly and Optional in Type --------------------------------------------------------------------

// type student ={
//     readonly id:number;
//     name:string;
//     age?:number;

// }

// let s1:student={
//     id:212,
//     name:"gopika"
// };


// --------------------------------------------------------------Nestesd Type---------------------------------------
// type Address ={
//     city:string;
//     pin:number;
// }

// type Customer={
//     name:string;
//     address:Address;
// }


// const customer1:Customer={
//     name:"gopika",
//     address:{
//         city:"kochi",
//         pin:421234
//     }
// };



// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 


// ---------------------------------------------------------------Interface--------------------------------------------------------------------------

// interface Person {
//     name:string;
//     age:number;
// }

// const user:Person={
//     name:"Gopika",
//     age:21,
// }


// ---------------------------------------------------------------optionalproperty----------------------------------------------------cut---

// interface Product{
//     name:string;
//     price?:number;
// }

// const item:Product={
//         name:"pen"
// }


// --------------------------------------------------------readonly property-------------------------------------------------------

// interface person{
//     readonly id : number;
//     name:string;
// }

// const user :person={
//     id:212,
//     name:"gopika"
// }

// user.name="gopzz"

// console.log(user)


// user.id=32  // this cant be changed

// ------------------------------------------------------------Interface with Methods--------------------------------------------------------

// interface Animal{
//     name:string,
//     speak():string;
// }

// const dog:Animal={
//     name:"tomy",
//     speak(){
//         return "Woof";
//     },
// }


//------------------------------------------------------------ interface for classes-----------------------------------------------------------------------




// -------------------------------------------------------------extending interfaces--------------------------------------------------------------------------------

// interface person{
//     name:string;
// }
// interface employee extends person {
//     empid:number;
// }

// const user :employee={
//     name:"gopika",
//     empid:211
// }


// -------------------------------------------------------------------combine multiple types--------------------------------------------------------------------------------


// ----------------------using &(intersection Type)----------------------------------------


// type Name={
//     name:string;
// };

// type Age={
//     age:number;
// }

// type Person = Name & Age;

// const user:Person={
//     name:"gopika",
//     age:21,
// }


// ----------------Using | (Union Type)----------------------------------------------


// type Admin = {
//   role: string;
// };

// type Guest = {
//   visitCount: number;
// };

// type User = Admin | Guest;

// const user1: User = {
//   role: "admin", // ✅ OK
// };

// const user2: User = {
//   visitCount: 5, // ✅ OK
// };


// ----------------------------------------------------------------------combine multiple interfaces -----------------------------------------------------------------------

// ----------------------------------extends----------------------------------------------

// interface A {
//   a: number;
// }

// interface B {
//   b: string;
// }

// interface C extends A, B {
//   c: boolean;
// }


// -------------------------------

// interface Person {
//   name: string;
// }

// interface Employee {
//   employeeId: number;
// }

// interface Developer extends Person, Employee {
//   skills: string[];
// }

// const dev: Developer = {
//   name: "Gopika",
//   employeeId: 101,
//   skills: ["JavaScript", "TypeScript", "React"],
// };


// ------------------------------------- You can also use type with & to combine interfaces-------

// interface A {
//   x: number;
// }

// interface B {
//   y: number;
// }

// type Combined = A & B;

// const point: Combined = {
//   x: 10,
//   y: 20,
// };


// ---------------------------------------------------Promise---------------------------------------------------------------cut---


// let fetchData = new Promise<string>((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Data recieved");

//     },2000);
// });

// fetchData
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })

// ---------------------------------------------------------
// let fetchData = new Promise<string>((resolve,reject)=>{
//     let success = false
//     if(success){
//         setTimeout(()=>{
//             resolve("sucess")
//         },2000)
//     }else{
//         setTimeout(()=>{
//             reject("failed")
//         },2000)
//     }
// })


// fetchData
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })


// ----------------------------------------------async await-------------------------------------------------------


// ----------------------------numeric enum
// enum Direction{
//     up,
//     down,
//     left,
//     right
// }

// let move :Direction=Direction.right

// console.log(move)
// -------------------------------string enum


// enum Status {
//     Success ="success",
//     Error = "error",
//     Loading = "loading"
// }

// let currentStatus :Status = Status.Success;
// console.log(currentStatus);


// enum UserRole {
//     Admin ="admin",
//     Customer ="customer",
//     Guest="guest"
// }

// function checkAccess(role:UserRole){
//     if(role === UserRole.Admin){
//         console.log("full access granted.");
//     }else{
//         console.log("limited access.");
//     }
// }

// checkAccess(UserRole.Admin);
// checkAccess(UserRole.Customer);


// -------------------------------------------------------------------Static type-------------------------------------------------

// let age: number = 25;     // age must be a number
// age = "twenty-five";      // ❌ Error: Type 'string' is not assignable to type 'number'



// -----------------------------------------------------------------------union type--------------------------------------------------------

// let value: string | number;

// --------------------------------------


// let age: string | number;

// age = 25;         // ✅ okay
// age = "twenty";   // ✅ okay
// age = true;       // ❌ Error: Type 'boolean' is not assignable to type 'string | number'


// -------------------------------------------------


// function printId(id: number | string) {
//   console.log("Your ID is " + id);
// }

// printId(101);         // ✅
// printId("ABC123");    // ✅


// ---------------------------------------------------------


// let data: (string | number)[] = ["apple", 10, "banana", 20];




// ----------------------------------------------------------------namaed type------------------------------------------------------


// type User = {
//   name: string;
//   age: number;
// };


//Now you can use User as a type anywhere.

// const user1: User = {
//   name: "Gopika",
//   age: 22,
// };



// ------------------------------------------------


// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }


// const item: Product = {
//   id: 1,
//   name: "Pen",
//   price: 10,
// };



// ---------------------------------------------------------------------------named union type------------------------------------------

// type Status = "success" | "error" | "loading";

// let apiStatus: Status;
// apiStatus = "success";  // ✅
// apiStatus = "fail";     // ❌ Error


// ------------------------------------------------------------------Arrays and Tuples------------------------------------------------

// let names: string[] = ["Alice", "Bob", "Charlie"];
// let scores: number[] = [90, 85, 88];


// -------------------------------

// let isPassed: Array<boolean> = [true, false, true];


// --------------------------to access these

// console.log(names[0]);      // Alice
// names.push("David");        // Add to end


// ---------------------------------------------------tuples 

// let person: [string, number] = ["Gopika", 21];


// console.log(person[0]); // Gopika
// console.log(person[1]); // 21

// The order and number of elements must match the type declaration.

// let wrong: [number, string] = [21, "Gopika"]; // ✅ OK
// let error: [number, string] = ["Gopika", 21]; // ❌ Error


// -----------------------------------------------------------------

// // Array
// let colors: string[] = ["red", "green", "blue"];

// // Tuple
// let user: [string, number, boolean] = ["Gopika", 21, true];



// -----------------------------------------------------------------function-------------------------------------------------------------------------

// ------------------------------------- Basic Function Syntax

// function greet (name:String):string{
//     return `hello ,${name}`;
// }

// console.log(greet("gopika"))

// name: string → parameter with a type

// : string after ) → return type


// -------------------------------------------2. Function with No Return (void)

// function sayHello():void{
//     console.log("hello");
// }

// ----------------------------------------- 3. Optional Parameters

// function greetUser(name?:string):string{
//     return name ? `hi ,${name}`:"hi";
// }


// Optional parameters must always come after required ones.

// function test(a: number, b?: number) {} // ✅ Valid
// function test2(a?: number, b: number) {} // ❌ Error


// ------------------------------------------✅ 4. Default Parameters

// function greet(name:string="Guest"):string{
//     return `Welcome,${name}`;
// }


// ---------------------------------------------✅ 5. Rest Parameters


// Accepts multiple arguments as an array

// function sum(...numbers:number[]):number {
//     return numbers.reduce((acc,val)=>acc+val,0);
// }


// console.log(sum(1, 2, 3, 4)); // 10

// ------------------------------------------✅ 6. Arrow Functions

// const multiply =(a:number,b:number):number => a*b;


// ----------------------------------------✅ 7. Function Type Aliases

// type Add = (a: number, b: number) => number;

// const add: Add = (x, y) => x + y;


// -------------------------------------------✅ 8. Anonymous Functions

// Functions without a name (often used in callbacks).

// setTimeout(function(){
//     console.log("time is up")
// },1000);


// setTimeout(()=>console.log("hello after 1 sec"),1000)


// ------------------------------------------------------------------------Objects--------------------------------------------------------------------cut---


// -----------------------------------------✅ 1. Basic Object Type
// let person:{name:string;age:number} ={
//     name:"gopika",
//     age:21,
// }


// -----------------------------------------✅ 2. Optional Properties
// let student : {name:string;age?:number}={
//     name:"gopika",
// }


// -------------------------------------------✅ 3. Readonly Properties
// let book:{title:string; readonly author:string}={
//     title:"atomic habits",
//     author:"james clear"
// }

// book.author = "clear"  //this will show error


// --------------------------------------------✅ 4. Using type for Objects
// type User ={
//     name:string;
//     age : number;
// };

// let user1:User = {
//     name:"gopika",
//     age:21
// }


// ------------------------------------------------✅ 5. Nested Object Types
// type Address ={
//     city:string;
//     pincode:number;
// }

// type User={
//     name:string;
//     age:number;
//     address:Address;
// };


// let emp:User ={
//     name:"gopika",
//     age:21,
//     address:{
//         city :"kochi",
//         pincode:682312,
//     },
// };


// -----------------------------------------------✅ 6. Object with Index Signature

// Used when you don’t know all property names in advance.

// type Scores = {
//   [subject: string]: number;
// };

// let marks: Scores = {
//   Math: 90,
//   English: 85,
// };



// -------------------------------------------------------------------------------------------------generic function------------------------------------------------------

// -------------------------without Generics 
// function identity(value:any):any{
//     return value;
// }

// identity("hello");


// ----------------------with Generics
// function identity<T>(value:T):T{
//     return value;
// }

// console.log(identity<string>("Hello"));
// console.log(identity<number>(7));


// ---------------------------------generics with array 

// function getFirst<T>(arr:T[]):T{
//     return arr[0];
// }
// console.log(getFirst<string>(["apple","grape"]));
// console.log(getFirst<number>([2,5]));

// -----------------------------------generics with Multiple Types
// function merge<T,U>(a:T,b:U):[T,U]{
//     return [a,b];
// }

// const result = merge<string,number>("age",21);

// ---------------------------------------generics interface
// interface Box<T>{
//     value:T;
// }

// let stringBox : Box<string> = {value:"hello"};
// let numberBox: Box<number>={value:123};

// ------------------------------------------------------generic function
// function getFirstElement<T>(arr:T[]):T{
//     return arr[0];
// }

// const firstString = getFirstElement<string>(["apple","banana"])
// console.log(firstString);

// const firstNumber = getFirstElement<number>([10,20,30]);
// console.log(firstNumber);


// --------------------------------------------------------------------------------------------utility types-------------------------------------------------------

// ----------------------------partial <type>
// Makes all properties optional.

// type User ={
//     name:string;
//     age:number;
// };

// const updateUser = (user:Partial<User>)=>{

//     // user may have name, age, or both

// };


// updateUser({name:"Gopika"});


// -----------------------------------required<Type>
// Makes all properties required, even if they were optional before.

// type User ={
//     name?:string;
//     age?:number;
// };

// const newUser:Required<User> ={
//   name:"gopika",
//   age:21,
// };

// ------------------------------------✅ 3. Readonly<Type>

// Makes all properties read-only (you can’t change them after creation).

// type User ={
//     name:string;
//     age:number;
// };
// const user:Readonly<User> ={
//     name:"gopika",
//     age:21,
// };



































// ------------------------------------------------------------------oops---------------------------------------------------------------------


// encapsulation 
// data prtect cheyum , private use cheyth ahn protect cheya, ath direct access cheyan patilla methods use cheyanam
// class Account{
//     private balance :number;

//     constructor(initialAmount:number){
//         this.balance=initialAmount
//     }

//     deposite(amount:number){
//         if(amount>0){
//             this.balance+=amount
//         }
//     }

//     withdraw(amount:number){
//         if(amount>0&&amount<=this.balance){
//             this.balance-=amount
//         }
//     }
//     getbalance(){
//         return this.balance;
//     }

// }

// const account = new Account(1000);

// account.deposite(500);
// account.withdraw(300);
// console.log(account.getbalance()); // ✅ Safe result: 1200


// ----------------------------------------------------

// without abstraction 

// class Vehicle {
//   start() {
//     console.log("Vehicle starts");
//   }
// }

// class Car extends Vehicle {
//   start() {
//     console.log("Car starts");
//   }
// }


// -----------------------------------abstraction

// It says:
// "I’m just an idea. I don’t know how this works. Whoever extends me must implement it."

// abstract class Shape {
//   abstract draw(): void; // All shapes must implement this!
// }

// class Circle extends Shape {
//   draw() {
//     console.log("Drawing a circle");
//   }
// }

// class Square extends Shape {
//   // ❌ ERROR if you forget to implement draw()
// }


// -------------------------------------------------Inheritance

// One class (child) can inherit properties and methods from another (parent).

// Promotes code reusability.

// class Animal {
//   move() {
//     console.log("Moving...");
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log("Bark!");
//   }
// }

// const dog = new Dog();
// dog.move(); // Inherited from Animal



// -----------------------------------------polymorphism

// (this is a method overriding)
// class Dog {
//   speak() {
//     console.log("Bark!");
//   }
// }

// class Cat {
//   speak() {
//     console.log("Meow!");
//   }
// }

// // Treat both the same way
// const animals = [new Dog(), new Cat()];

// for (let animal of animals) {
//   animal.speak(); // Dog says Bark!, Cat says Meow!
// }


// ------------------------------overloading

// Same function name, different parameters

// function greet(name:string):void
// function greet(name:string,age:number):void;

// function greet(name:string,age?:number):void{
//     if(age!==undefined){
//         console.log(`hello ${name}, age${age}`);
//     }else{
//         console.log(`hello ${name}`);
//     }
// }

// greet ("gopika");
// greet ("gopika",22);


// ---------------------------------overriding


// Child class replaces a method from the parent class



// class Animal {
//   speak() {
//     console.log("Animal speaks");
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log("Dog barks"); // 🔁 This overrides the parent method
//   }
// }

// const dog = new Dog();
// dog.speak(); // Output: Dog barks


