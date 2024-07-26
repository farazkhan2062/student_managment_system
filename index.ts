#! /usr/bin/env code
//This project is a simple console based Student Management System.
//In this project you will be learning how to add new students, how to generate a 5 digit unique studentID for
//each student, how to enroll students in the given courses. Also, you will be implementing the following
//operations enroll, view balance, pay tuition fees, show status, etc. The status will show all the details of
//the student including name, id, courses enrolled and balance.This is one of the best projects to implement the
//Object Oriented Programming concepts.

import inquirer from "inquirer";
import chalk from "chalk";

// Student Admission Form
console.log(chalk.blueBright("Student Admission Form"));

let studentInformation: {
  name: string;
  age: number;
  phone: number;
  email: string | number;
  address: string | number;
  course: string;
} = await inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "Enter your name: ",
  },
  {
    type: "input",
    name: "age",
    message: "Enter your age: ",
  },
  {
    type: "input",
    name: "phone",
    message: "Enter your phone number: ",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email: ",
  },
  {
    type: "input",
    name: "address",
    message: "Enter your address: ",
  },
  {
    type: "input",
    name: "course",
    message: "Enter your course: ",
  },
]);

console.log(studentInformation)
const studentID = Math.floor(Math.random() * 100000);
console.log(
  chalk.blue(`\n\nYour Name is ${chalk.magentaBright.bold(
    studentInformation.name
  )}. You are selecting to join ${chalk.magentaBright.bold(
    studentInformation.course
  )} course.
Your unique Student ID is ${chalk.magentaBright.bold(studentID)}`)
);
console.log(
  chalk.yellow(
    "\nKindly pay your fee through fee transfer process by using your unique id"
  )
);

let myBalance = 10000;

const idAns = await inquirer.prompt([
  {
    type: "number",
    name: "id",
    message: "\nEnter your unique ID: ",
  },
]);

if (idAns.id === studentID) {
  console.log(chalk.yellow("Your unique ID is valid,"));
  console.log(chalk.green("\nPlease proceed to pay your fee"));

  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "fee",
      message: "Select an action: ",
      choices: ["Fee deposite", "Check Balance", "Exit"],
    },
  ]);
  if (answer.fee === "Fee deposite") {
    const depositeAmnt = await inquirer.prompt([
      {
        type: "number",
        name: "deposite",
        message: "Enter your deposite amount: ",
      },
    ]);
    if (myBalance >= depositeAmnt.deposite) {
      myBalance -= depositeAmnt.deposite;
      console.log(chalk.blueBright("\nYour deposite is successful"));
      console.log(
        chalk.red(`Your current balance is ${chalk.green.bold(myBalance)}`)
      );
    } else {
      console.log(chalk.red.bold.italic("insufficiant Balance"));
    }
  } else if (answer.fee === "Check Balance") {
    console.log(`Your current balance is ${chalk.blue(myBalance)}`);
  } else if (answer.fee === "Exit") {
    console.log(chalk.magentaBright("Thank you for using our service"));
  }
} else {
  console.log(chalk.red.bold("Your unique ID is invalid, "));
  console.log(chalk.blue.bold("Please try again"));
}
