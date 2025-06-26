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
var User = /** @class */ (function () {
    function User(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "Jaipur";
    }
    return User;
}());
var gopika = new User("g@ gmail.com ", "gopika", "445");
