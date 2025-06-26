class User {
    protected _courseCount = 1
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
// ---------------------------------inheritance---------------
class SubUser extends User {
    isFamily :boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}
// here insetead of private if we give protected for courcecount we can actually access it for extends
const gopika = new User ( "g@ gmail.com ","gopika",);


export{}