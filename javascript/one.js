// Variables
// What is variables
// Variables are used to store informations.
const productName = "Laptop"
console.log(productName)
// let and const used to declare a variable 
let followers = 100
followers++;
console.log(followers)
// Const = if we don't change the variable and let if we do change the variable name.
// Variable naming rule 
// Variables name can't start from number contain hyphens.For most variable name we use camel case .

// Lesson two Data types 
// js have seven primitive data types.
// String
// it represent text 
const name = "Abebe";
const fatherName = "Kebede";
const country = "Ethiopia"
console.log(name)

// Template literals
// using backticks we cn insert variable directly into a text.
const profession = "Developers"
console.log(`My name is ${name} ${fatherName}. I am from ${country}.`)
// Number
const age = 21
const price = 34.43
console.log(age)
// Boolean
// Boolean have two values either true or false.
const isLoggedIn = true;
// Booleans are essentials for conditions.
let username;
console.log(username);
// Null
// an intentional absence of a value.
let selectedProject = null;
// null and undefined 
// if their is no value assigned to it it is undefined .
// but null we are gonna assign null.
// Object 
// store related info using key value pairs.
const developer = {
    name:"Lydia",
    role:"Full stack web developer"

}
console.log(developer.name)
// Arrays
// store oredered collections of values.
const skills = ["React","Nextjs","Node.js"]
console.log(skills[0])

// Big int and symbol 
const hugeNumber =900n;
const id = Symbol("id")
console.log(id)
// Type of operator 
console.log(typeof id);

// Lesson three operator 
// Arthimetic operators 
// + - * / % **  these are arithimetic operators
// Assignment operators 
let balance = 1000;
balance += 500
balance -= 200
console.log(balance)
// Comparision operators 
// these return boolean values 
console.log(10 > 5);
// == it allows type conversion 
//  ===check equality without converting to different tyes 
// Logical operators  &&(AND) || (or) and !(not)

// 3.5 Truthy and Falsy values 
// Most values have truth value includeing empty arrays and objects 
// Big int and symbol 
const largeNumber =9000n;
const id_one = Symbol("id")
console.log(id)
//  common falsy values 

false
0
-0
0n
""
null
undefined
NaN
// Conditional statements 
const available = true;

if(available){
    console.log("Available for projects")
}
// The code run only when the condition is true.
// if ...else 
const isLogged = false;
if(isLogged){
    console.log("Welcome back!")
} else{
    console.log("Please Login")
}
// else ....if 
// W
// we use this when we check multiple conditions.
// else if 
score = 85;
if (score >= 90){
    console.log("Excellent")
} else if(score >= 75){
    console.log("Very good")
} else if(score >= 50){
    console.log("Satisfactory")
}
// The condition is checked from top to bottom and executes the first matching.

// Switch 
// We use this when we compare one value with several possible values.
const role = "developer";
switch (role){
    case "admin":
        console.log("Admin dashboard")
        break;
    case "developer":
        console.log("Developer dashboard")
        break;
    case "visitor":
        console.log("Visitor dashboard")
        break;
    default:
        console.log("Unknown role")
}

// Ternary operator 
// Compact  conditional expression
// condition ? valueIfTrue : valueIFFAlse


// Loop
// this used for iterations 

// For l