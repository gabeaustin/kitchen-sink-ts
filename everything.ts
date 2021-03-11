// Number 4
// This is a variable that has a value of the developer's firstName.
let firstName: string = "Gabriel";

// Number 5
// This is a constant variable the lists the # of US states.
const number_us_states: number = 50;

// Number 6
// This is a variable the adds two numbers together.
let add_num: number = 5 + 4;

// Number 8
let sayHello = () => {
    // alert("Hello World!"); // change back once in production
    console.log("Hello World!");
}
sayHello();

// Number 9
let checkAge = (firstName: string, age: number) => {
    if (age < 21) {
        console.log(`Sorry + ${firstName}, you aren't old enough to view this page!`);
    }
}

let various_people: {firstName: string, age: number} [] = [
    {
        firstName: "Charles",
        age: 21
    },
    {
        firstName: "Abby",
        age: 27
    },
    {
        firstName: "James",
        age: 18
    },
    {
        firstName: "John",
        age: 17
    }
];


for (let i = 0; i < various_people.length; i++) {
    checkAge(various_people[i].firstName, various_people[i].age);
}

// Number 10
let fav_veggies: string[];
fav_veggies = ["Kale", "Carrots", "Green Peas", "Asparagus"];

for (let i = 0; i < fav_veggies.length; i++) {
    console.log(fav_veggies[i]);
}

// Number 11
let pet: {firstName: string, breed: string} = {
    firstName: "Bentley",
    breed: "French Bulldog"
};

console.log(pet.firstName);
console.log(pet.breed);

// Number 12
let new_users: {firstName: string, age: number} [] = [
    {
        firstName: "Jon",
        age: 38
    },
    {
        firstName: "Crystal",
        age: 21
    },
    {
        firstName: "Bradley",
        age: 10
    },
    {
        firstName: "Betty",
        age: 68
    },
    {
        firstName: "Leah",
        age: 20
    }
];

for (let i = 0; i < new_users.length; i++) {
    checkAge(new_users[i].firstName, new_users[i].age);
}

// Number 14
let getLength = (random_word: string) => {
    return random_word.length;
}

let length_of_word = getLength("Hello world");

if (length_of_word % 2 == 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}



