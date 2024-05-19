#! /usr/bin/env code
//This project is a simple console based Student Management System. 
//In this project you will be learning how to add new students, how to generate a 5 digit unique studentID for 
//each student, how to enroll students in the given courses. Also, you will be implementing the following 
//operations enroll, view balance, pay tuition fees, show status, etc. The status will show all the details of 
//the student including name, id, courses enrolled and balance.This is one of the best projects to implement the 
//Object Oriented Programming concepts.
import inquirer from "inquirer";
import chlalk from "chalk";
// Student Admission Form
console.log(chlalk.blueBright("Student Admission Form"));
let studentInformation = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Enter your name: ",
    },
    {
        type: "input",
        name: "age",
        message: "Enter your age: "
    },
    {
        type: "input",
        name: "phone",
        message: "Enter your phone number: "
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email: "
    },
    {
        type: "input",
        name: "address",
        message: "Enter your address: "
    },
    {
        type: "input",
        name: "course",
        message: "Enter your course: "
    }
]);
console.log(studentInformation);
const studentID = Math.floor(Math.random() * 100000);
console.log(`\n\nYour Name is ${studentInformation.name}. You are selecting to join ${studentInformation.course} course.
Your unique Student ID is ${studentID}`);
console.log("Kindly pay your fee through fee transfer process by using your unique id");
let myBalance = 10000;
const idAns = await inquirer.prompt([
    {
        type: "number",
        name: "id",
        message: "Enter your unique ID: "
    }
]);
if (idAns.id === studentID) {
    console.log("Your unique ID is valid,");
    console.log("Please proceed to pay your fee");
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "fee",
            message: "Select an action: ",
            choices: ["Fee deposite", "Check Balance", "Exit"]
        },
    ]);
    if (answer.fee === "Fee deposite") {
        const depositeAmnt = await inquirer.prompt([
            {
                type: "number",
                name: "deposite",
                message: "Enter your deposite amount: "
            }
        ]);
        if (myBalance >= depositeAmnt.deposite) {
            myBalance -= depositeAmnt.deposite;
            console.log("Your deposite is successful");
            console.log(`Your current balance is ${myBalance}`);
        }
        else {
            console.log("insufficiant Balance");
        }
    }
    else if (answer.fee === "Check Balance") {
        console.log(`Your current balance is ${myBalance}`);
    }
    else if (answer.fee === "Exit") {
        console.log("Thank you for using our service");
    }
}
else {
    console.log("Your unique ID is invalid, ");
    console.log("Please try again");
}
