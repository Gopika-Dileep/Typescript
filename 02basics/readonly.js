var myUser = {
    _id: "1234",
    name: "g",
    email: "g@.com",
    isActive: false
};
// this cardDetails is a type that combine previous two types 
// so its a way we create a type using the existing one 
myUser.email = "g@gmail.com";
// myUser._id ="asaa"
// we can change the values but if we use readonly that value we cant change it will show error
// here we cant change id it will show error
// if you want to show any details that is optional then give a ? so if that detail is not there it will not show error
