// Number 4
// This is a variable that has a value of the developer's name.
let name = "Gabriel";


// Number 5
// This is a constant variable the lists the # of US states.
const number_us_states = 50;


// Number 6
// This is a variable the adds two numbers together.
let add_num = 5 + 4;


// Number 8
function sayHello() {
    alert("Hello World!");
}

sayHello();


// Number 9
function checkAge(name, age) {
    if (age < 21) {
        console.log("Sorry " + name + ", you aren't old enough to view this page!");
    }
}

let various_people = [
    {
        name: "Charles",
        age: 21
    },
    {
        name: "Abby",
        age: 27
    },
    {
        name: "James",
        age: 18
    },
    {
        name: "John",
        age: 17
    }
];

for (let i = 0; i < various_people.length; i++) {
    checkAge(various_people[i].name, various_people[i].age);
}


// Number 10
let fav_veggies = ["Kale", "Carrots", "Green Peas", "Asparagus"];

for (let i = 0; i < fav_veggies.length; i++) {
    console.log(fav_veggies[i]);
}


// Number 11
let pet = {
    name: "Bentley",
    breed: "French Bulldog"
};

console.log(pet.name);
console.log(pet.breed);


// Number 12
let new_users = [
    {
        name: "Jon",
        age: 38
    },
    {
        name: "Crystal",
        age: 21
    },
    {
        name: "Bradley",
        age: 10
    },
    {
        name: "Betty",
        age: 68
    },
    {
        name: "Leah",
        age: 20
    }
];

for (let i = 0; i < new_users.length; i++) {
    checkAge(new_users[i].name, new_users[i].age);
}


// Number 14
function getLength(random_word) {
    return random_word.length;
}

let length_of_word = getLength("Hello world");

if (length_of_word % 2 == 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}



