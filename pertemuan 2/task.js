var users = [

    
    {
       name: "Aufa",
       age: 22,
       major: "Informatics"
    },

    {
        name: "Isfa",
        age: 22,
        major: "Informatics"
    },

    {
        name: "Nurul",
        age: 21,
        major: "Information System"
    },

    {
        name: "pina",
        age: 15,
        major: "Digital Marketing"
    },

    {
        name: "jojo",
        age: 23,
        major: "Informatika"
    }
]


var all = (users) =>   {
    for( const key in users) {
        var obj = users[key];
        for (prop in obj) 
        console.log(`${prop}: ${obj[prop]}`);
        console.log("");
}
};
console.log("# Get all Users");
(all(users));

console.log("");
var store = (user) => {
    users.push(user);

};
var newUser = {
    name: "Sabiq",
    age: 20,
    major: "informatics",
}
console.log("# Add new user = Sabiq");
(store(newUser));
(all(users));
console.log("");

var update = (index, user) => {
        users[index] = user;
}  
var editUser = {
    name : "Isfhani Ghiyath",
    age: 23,
    major: "English",
};
console.log("# Edit user : Isfa index[1]");
update(1,editUser);
(all(users));

console.log("");

var destroy = (index) => {
    users.splice(index, 1);
};
console.log("# Delete user : Nurul");
destroy(2);
(all(users));












