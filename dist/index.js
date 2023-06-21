"use strict";
let users = [
    {
        name: 'Shoha Tsuchida',
        age: 99,
        company: 'Coding Temple'
    },
    {
        name: 'Dylan Katina',
        age: 99
    }
];
var DaysofWeek;
(function (DaysofWeek) {
    DaysofWeek["Monday"] = "Monday";
    DaysofWeek["Tuesday"] = "Tuesday";
    DaysofWeek["Wednesday"] = "Wednesday";
    DaysofWeek["Thursday"] = "Thursday";
    DaysofWeek["Friday"] = "Friday";
    DaysofWeek["Saturday"] = "Saturday";
    DaysofWeek["Sunday"] = "Sunday";
})(DaysofWeek || (DaysofWeek = {}));
console.log(DaysofWeek.Monday);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
let employee = {
    name: 'Christian Askew',
    salary: 1000000,
    address: {
        street: 'Thieves st',
        city: 'Seattle',
        zipCode: 98101
    }
};
