function addTwo(num:number){
  
    return num+2
}


function getUpper(val:string){
    return val.toUpperCase()
}


function signUpUser(name:string,email:string,isPaid:boolean){

}

let loginUser = (name:string,email:string,isPaid:boolean=false)=>{

}


addTwo(5)
getUpper("Hi")
signUpUser("Gopika","gop@gmail.com",false)
loginUser("h","h@gmail.com")





// in this we need to write the type 
// earliar in variable declaration we said dont need to write the type but here
// in function we need to mention the type 

// now next part is how to return the same type like the qn is 

// function addTwo(num:number){
  
//     return num+2
// }

// in this  fuction if i return a string it wouldnt show error so how should we manage that
// ( return "hello ") will not show error in that but we need number as return so now we are going to look how to do that

function addtwo (num:number):number{
    return num+2
    // return "hello"
}

addtwo(7)

// now it is ok here now if we return anything other than number it shows error



 
// there is a scenerio that could happen in function and thatwe will study later

// function getValue(myval:number):boolean{
//     if(myval>5){
//         return true
//     }
//     return "200 ok"
// }

// in this  case if i gave boolean it will show error if i gave string then also it will show error 
// it can  handle using union that we will look later



const getHello = (s:string):string=>{
    return ""
}

const heros=["thor","spiderman","ironman"]
// const heros=[1,2,3]


heros.map((hero):string=>{
    return `hero is ${hero}`
})


// here we are assigning varaible and then pass to function so no need to declare type but return varaiable type should be declaired


function consoleError(errormsg:string):void{
    console.log(errormsg);
}


// here we are console ing  so return will automatically will be void so we need to write it there



// ---------------------------------------------------------from documentation --- never------------------------------------------------

function handleError(errormsg:string):never{
    throw new Error(errormsg);
}




export {}