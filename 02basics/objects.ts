const User ={
    name:"Gopika",
    email:"gop@gmail.com",
    isActive:true
}


function createUser({name: string, isPaid:boolean}){

}

let newUser ={name:"gopika",isPaid:false,email:"g@gmail.com"}

createUser(newUser)



function  createCourse():{name: string, price:number}{
    return {name:"react.js",price:399}
}


// here in function when we pass arguments when we create a new varaible and pass that varaible,
// if that has extra key value pair its not a problem but if we direclty passing values while calling function if there is extra values it shows error




// ------------------------------------------------------Aliases----------------------------------------
type User={
    name:string;
    email:string;
    isActive:boolean
}


function createuser(user:User):User{
    return {name:"",email:"",isActive:true}
}

createuser({name:"",email:"",isActive:true})


export {}