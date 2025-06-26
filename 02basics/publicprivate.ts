// class User {
//     public email :string
//     private name :string
//     readonly city :string ="jaipur"
//     constructor (email :string , name :string){
//             this.email = email
//             this.name = name
//     }
// }

// const gopika = new User ( "g@gmail.com ","gopika")


// now you cant acces name here beacuase it is private 
//  also you cant change city beacause it is readonly 
// and other values are public you dont need to specify its public by writing public 

// now we can write it in a short way 


class User {
    readonly city :string ="Jaipur"
    constructor (
        public email : string,
        public name :string,
        private userId :string
    ){

    }
    
}

const gopika = new User ( "g@ gmail.com ","gopika","445");

//  this will look like 

// calss User {
//     constructor ( email , name,userId){
//         this.email = email ;
//         this.name = name;
//         this.userId = userId ;
//         this.city ="jaipur";
//     }
// }
// in javascript
export {}