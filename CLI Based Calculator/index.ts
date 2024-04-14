#! /usr/bin/env node
 
import inquirer  from "inquirer";

const ans = await inquirer.prompt([
    {
        type : "number",
        name : "num1",
        message : "Enter First Number "
    },
    {
        type : "number",
        name : "num2",
        message : "Enter Second Number "
    },
    {
        type : "list",
        name : "operator",
        message : "Enter Operation you want to do : ",
        choices : ["Add","Subtract","Multiply","Divide"]
    }
]);

let result : number;

switch(ans.operator)
{
    case "Add" :
        result = ans.num1 + ans.num2;
        console.log(`Answer of Addition is ${result}`);
        break;
    case "Subtract" :
        result = ans.num1 - ans.num2;
        console.log(`Answer of Subtraction is ${result}`);
        break;

    case "Multiply" :
        result = ans.num1 * ans.num2;
        console.log(`Answer of Multiplication is ${result}`);
        break;
    case "Divide" :
        result = ans.num1 / ans.num2;
        console.log(`Answer of Division is ${result}`);
        break; 
}
