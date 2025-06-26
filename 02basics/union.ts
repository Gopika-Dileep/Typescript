let score : number|string =33

score =44
score = "55"

// here  the  score has two types we use this incase we dont know what exact type will be our input 
// like if the score can be number or sting we are not sure about it 
// so if we give number and the input is string then it will show error and vice versa
//  so we give both type saying this can either be string or be number


type User = {
    name: string;
    id: number
}


type Admin ={
    username :string;
    id:number
}

let gopika :User|Admin = {name :"gopika",id: 334}


gopika = {username :"hc",id:334}



// function getDbId(id:number|string){
//     // making some API calls 
//     console.log(`DB id is ${id}`)
// }

getDbId(3)
getDbId("3")


// function getDbId(id:number|string){
//      id.toLowerCase()
// }
// this will show error because the input will be number or string so we gave conditon 


function getDbId(id:number|string){
    if (typeof id ==="string" ){
        id.toLowerCase()
    }

}


// ---------------------------array

// const data : number[]=[1,2,3,"4"]

// const data2 : string[]=[1,2,3,"4"]

// in this both case it will show error 


// const data3 : string[] |number[]=[1,2,3]

// in this it will be like in the array all the one will be number or everyon ewill be string not a mix of both 



const data3 : (string |number)[]=[1,2,3,"4"]


// in this  array we can have number and string as well 

// we can add boolean also 


// let pi:3.14 =3.14
// pi = 3.145

// this will show  error this is more strict that alue only can be the input


let seatAllotment :"aisle"| "midlle"| "window"


seatAllotment = "aisle"

// seatAllotment = "crew"

// the crew will throw error


export {}
