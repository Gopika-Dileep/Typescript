// -----------------type string and how to give type------------------------------

let greetings:string ="hello gopika";

greetings.toUpperCase()


 console.log( greetings);




//  ----------------------------------number--------------------------------

let userId:number = 334455.3

// we can write it in a simple way and more correct way

let usrId= 334455.3

usrId.toFixed()

// here in typescript it automataically  knows we are asigning 
// number to it so we dont need to specifically write the type there
// if we  assign string to usrId it will automatically shows error

//  here if we use userId. then the suggestion will came that contains number methods 

// important point 

// number is for numbers like 42.javascript does not have a special value for integers, so there's no equivalent to int or float - everything is simply number

// for ex: 4, 6.2 ....


// -------------------------------------------boolean ----------------------------------------------------------------


let isLoggedIn:boolean = false 



// -----------------------------------------------------------any----------------------------------------------------------------

let hero;

function getHero(){
    return "thor"
}

hero =getHero()


// here if we dont know about what type of variable is going to give then it wii be an any type :
// so any kin of varable can be assigned

// but we shouldnt use this any beacuase it will be like javascript so there is no  meaning of using typescript

// documentation note 

//  Typescript also has a special type, any, that you can use whenever you dont want a particula value to cause typechecking errors.

// you usually want to avoid this, though , beacause any isnt type- checked . Use the compiler flag noImplicitAny to flag any  implicit any  as an error.

//  avoid using any 


 export {}