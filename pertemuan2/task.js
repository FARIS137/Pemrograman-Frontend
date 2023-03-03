/**
 * TODO 1.
 * Buat array of object users (5 users).
 * Object memiliki property: name, age, major.
 * Note: Ubah var menggunakan JavaScript Modern.
 */

const users = [

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
];

/**
 * TODO 2
 * Buat function all: Menampilkan semua data user.
 * Hint: Gunakan for/for-of.
 * Note: Ubah function menggunakan arrow function.
 */
const all = (users) =>   {
    for( const key in users) {
        const obj = users[key];
        for (prop in obj) 
        console.log(`${prop}: ${obj[prop]}`);
        console.log("");
}
};
console.log("# Get all Users");
(all(users));

console.log("");

/**
 * TODO 3
 * Buat function store: Menambahkan user baru.
 * Hint: Gunakan method push.
 * Note: Ubah function menggunakan arrow function.
 */
const store = (user) => {
    users.push(user);

};
const newUser = {
    name: "Sabiq",
    age: 20,
    major: "informatics",
};

console.log("# Add new user = Sabiq");
(store(newUser));
(all(users));
console.log("");

/**
 * TODO 4.
 * Buat function update: Mengedit data user.
 * Hint: re-assign array.
 * Note: Ubah function menggunakan arrow function.
 */
const update = (index, user) => {
        users[index] = user;
}  
const editUser = {
    name : "Isfhani Ghiyath",
    age: 23,
    major: "English",
};
console.log("# Edit user : Isfa index[1]");
update(1,editUser);
(all(users));
console.log("");

/**
 * TODO 5.
 * Buat function destroy: Menghapus data user.
 * Hint: Gunakan method splice.
 * Note: Ubah function menggunakan arrow function.
 */
const destroy = (index) => {
    users.splice(index, 1);
};
console.log("# Delete user : Nurul");
destroy(2);
(all(users));




/**
 * Jangan hapus exports.
 * Exports ini untuk tujuan testing.
 */
 module.exports = { users, all, store, update, destroy };