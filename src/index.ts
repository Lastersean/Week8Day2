// 1. Given the data below, define a type alias for representing users.


// type Users = {
//     name: string,
//     age: number,
//     company: string
// }

// let users: Users = [ 
//     {
//         name:'Shoha Tsuchida',
//         age:99,
//         company:'Coding Temple'
//     },  
//     {
//         name:'Dylan Katina',
//         age:99
//     }
// ];   //is this correct or did is my syntax off

// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.
enum DaysofWeek{Monday= "Monday", Tuesday="Tuesday", Wednesday="Wednesday", Thursday="Thursday", Friday="Friday", Saturday="Saturday", Sunday="Sunday"}
console.log(DaysofWeek.Monday)
// 3. Given the Person class below, create a getter for getting the full name of a person.

class Person {
    constructor(
        public firstName:string, 
        public lastName:string) {
            this.firstName = firstName,
            this.lastName = lastName
        }
        getter = (): string =>{
            return `${this.firstName} ${this.lastName}`

        }
}
const people = new Person('Sean', 'Laster')
console.log(people.getter())

// 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary. 


// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.
let employee = {
    name:'Christian Askew',
    salary:1_000_000,
    address:{
        street:'Thieves st',
        city:'Seattle',
        zipCode: 98101
    }
};{}
interface Employee{
    name: string,
    salary: number,
    address: object

}
interface Address{
    street: string,
    city: string,
    zipCode: number
}