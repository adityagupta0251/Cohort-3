function greet (names){
    console.log("Hello, " + names + "!");
    return names;


}

let myName = "Aditya";
let callthisfunc = greet(myName);

// Assignment 1
// Write a function sum that finds the sum of two numbers. 
// Side quest - Try passing in a string instead of a number and see what happens?

//solution
function sum (a, b){
    let sumof = a +b;
    console.log("The sum of " + a + " and " + b + " is : " + sumof);
    return sumof;
}

let value = sum(34, 45);

// Completed


// Assignment 2
// Write a function called canVote that returns true or false if the age of a user is > 18

function canVote (age){
    if(age > 18){
        console.log("You can vote");
        return true;
    }else{
        console.log("You cannot vote");
        return false;
    }

}

let myage = 29;
let mysecondage = 16;
let ifcanvote = canVote(myage);
let ifcanvote2 = canVote(mysecondage);

// Completed