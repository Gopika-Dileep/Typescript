// const user : string|number[] = [1,"gd "]
// here the order is not a problem 

let tUser : [string,number,boolean]

// tUser = ["hc",77,true]
// tUser = [true,77,"gd"] we cant write it like this 

// tuple is for writing it in the correct order  


let rgb: [number,number, number] = [223,123,777]

// here we cant add extra value only three values should be there else it will show error

type user =[number,string]

const newUser: user = [112,"dssd@gmail.com"]

newUser[1]="gd@gmail.com"

// i can replace the values in this user array 

// newUser.push(true)

// in documentation they say array methods 



export {}