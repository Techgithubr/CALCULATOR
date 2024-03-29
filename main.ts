#! /use/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

//step 01
const answers :  {
    numberOne: number
    numberTwo: number
    operator: string
} = await inquirer.prompt([
    { type:"number",
      name: "numberOne",
      message: "Enter Your First Number"
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Enter Your Second Number"
    },
    {
        type: "list",
        name: "operator",
        message: "Enter Your Operator",
        choices: ["+", "-", "*", "/"]}
])
//step 02
const { numberOne, numberTwo, operator } = answers;

let result
switch (operator) {
    case "+":
        result = numberOne + numberTwo;
        break;
    case "-":
        result = numberOne - numberTwo;
        break;
    case "*":
        result = numberOne * numberTwo;
        break;
    case "/":
        result = numberOne / numberTwo;
        break;
    default:
        console.log("Invalid Operator");
}
console.log(chalk.yellow(`${numberOne} ${operator} ${numberTwo} = ${result}`));





