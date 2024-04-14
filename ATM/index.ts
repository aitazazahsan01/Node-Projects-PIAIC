#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance : number = 20000;
let userName : string = "Aitazaz Ahsan";
let pinCode : number = 1212;

const ans = await inquirer.prompt([
    {
        type : "input",
        name : "username",
        message : "Enter Your Username"
    },
    {
        type : "number",
        name : "pin",
        message : "Enter Your Pincode "
    }
]);

if((ans.username == userName) && (ans.pin == pinCode))
{
    console.log(`Welcome ${ans.userName} to your Account`);

   while(1)
   {
    const option = await inquirer.prompt([
        {
            type : "list",
            name : "option",
            message : "What do You Want to Do ?",
            choices : ["Deposit", "WithDrawal", "currentBalance","quit"]
        }
    ]);

    if(option.option == "quit")
    {
        console.log("Thanks For Using Our Services");
        break;
    }
    else if(option.option == "Deposit")
    {
        let done = await inquirer.prompt([
            {
                type : "number",
                name : "amount",
                message : "Enter the  Amount You want to Deposit"
            }
        ]);
        myBalance += done.amount;
        console.log(`Now Your Current Balance is ${myBalance}`); 
    }

    else if(option.option == "WithDrawal")
    {
        let done = await inquirer.prompt([
            {
                type : "number",
                name : "amount",
                message : "Enter the  Amount You want to Withdrawal"
            }
        ]);
        myBalance -= done.amount;
        console.log(`Now Your Current Balance is ${myBalance}`);        
    }

    else if (option.option == "currentBalance")
    {
        console.log(`Your Current Balance is ${myBalance}`);
    }
   }
}