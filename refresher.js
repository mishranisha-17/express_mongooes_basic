const user = {
    name: "nisha",
    class: "batch7",
    email: "nisha@gmail.com",
    address:{
        city: "noida",
        state: "up",
        zip: "201",
    },

    work: function(workplace){
        console.log("nisha work in +",workplace);
    },
};
console.log(user);
console.log("user.name");
console.log("user.address.city");
user.work("noida")