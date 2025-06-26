// interface is like we write interface instead of type 


// interface User {
//     readonly dbId:number
//     email :string,
//     userId : number,
//     googleId?: string
//     // startTrail:()=>string  (this is one method of writing function )
//     startTrail():string  
//     // this is another way of writing function
//     getCoupon(cuponname :string ,value :number ): number
//     //  here it says coupon name should be in string but the return value should be in number

// }
//  here we gave a function the condition we give here is that function should return string

// 
// const gopika :User = {
//     dbId: 23, 
//     email :"g@gmail.com",
//     userId :231,
//     githubToken : "github",
//     startTrail:()=>{
//         return "trial started"
//     },
//     getCoupon:(name:"gopika",off:10)=>{
//         return 10 
//     }
// }
// gopika.email ="g@Gd.com"
// gopika.dbId =43
//  we use read only so we cant change id it will show error


//  interface vs type 


// interface User{
//     githubToken : string 
// }

//  see you can add more values without tuching the first one 
// there is no issue with that


// interface Admin extends User {
//     role:"admin" | "ta" | "learner"
// }


// so now i can  add value of role to gopika but change the user to admin 
//  like 
// const gopika :Admin ={
// ....
// }



// -------------------------------------complete thing in one code ----------



interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  githubToken: string;
  startTrail(): string;
  getCoupon(cuponname: string, value: number): number;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

// ✅ Now use Admin here
const gopika: Admin = {
  dbId: 23,
  email: "g@gmail.com",
  userId: 231,
  githubToken: "github",
  role: "admin", // ✅ Valid now
  startTrail: () => "trial started",
  getCoupon: (name: string, off: number) => 10
}



export {}