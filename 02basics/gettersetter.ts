class User {
    private _courseCount = 1
    readonly city :string ="Jaipur"
    constructor (
        public email : string,
        public name :string,
    ){

    }
    private deleteToken(){
        console.log("Token deleted")
    }
    
     get getAppleEmail():string{
        return `apple${this.email}`
    }

    get courseCount():number{
        return this._courseCount
    }

    set courseCount(courseNum){
        // this should not havae a return type
        if(courseNum<=1){
            throw new Error("course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}


const gopika = new User ( "g@ gmail.com ","gopika",);

// gopika.deleteToken()
// this is a private property and only acceceble with in the class


//  we can get the private value uing getter and not driectly 
// we can also change the private value using setter but not directly

export {}


//  getters and setters are used to get and set the values it could be public or private property 

