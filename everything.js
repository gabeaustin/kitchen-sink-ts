"use strict";
// Number 4
// This is a variable that has a value of the developer's firstName.
var firstName = "Gabriel";
// Number 5
// This is a constant variable the lists the # of US states.
var number_us_states = 50;
// Number 6
// This is a variable the adds two numbers together.
var add_num = 5 + 4;
// Number 8
var sayHello = function () {
    // alert("Hello World!"); // change back once in production
    return console.log("Hello World!");
};
sayHello();
// Number 9
var checkAge = function (firstName, age) {
    if (age < 21) {
        console.log("Sorry + " + firstName + ", you aren't old enough to view this page!");
    }
};
var various_people = [
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
for (var i = 0; i < various_people.length; i++) {
    checkAge(various_people[i].firstName, various_people[i].age);
}
// Number 10
var fav_veggies = ["Kale", "Carrots", "Green Peas", "Asparagus"];
for (var i = 0; i < fav_veggies.length; i++) {
    console.log(fav_veggies[i]);
}
// Number 11
var pet = {
    firstName: "Bentley",
    breed: "French Bulldog"
};
console.log(pet.firstName);
console.log(pet.breed);
// Number 12
var new_users = [
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
for (var i = 0; i < new_users.length; i++) {
    checkAge(new_users[i].firstName, new_users[i].age);
}
// Number 14
var getLength = function (random_word) {
    return random_word.length;
};
var length_of_word = getLength("Hello world");
if (length_of_word % 2 == 0) {
    console.log("The world is nice and even!");
}
else {
    console.log("The world is an odd place!");
}
