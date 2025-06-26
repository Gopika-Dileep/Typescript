// interface is like we write interface instead of type 
// ✅ Now use Admin here
var gopika = {
    dbId: 23,
    email: "g@gmail.com",
    userId: 231,
    githubToken: "github",
    role: "admin", // ✅ Valid now
    startTrail: function () { return "trial started"; },
    getCoupon: function (name, off) { return 10; }
};
