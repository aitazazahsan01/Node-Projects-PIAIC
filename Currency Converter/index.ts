#! usr/bin/env node

import inquirer from "inquirer";

const ans = await inquirer.prompt([
    {
        type : "list",
        name : "currentCurrency",
        message : "Choose the Currency You are Having",
        choices : ["$","Euro","Riyal","Rs", "INRs"]
    },
    {
        type : "number",
        name : "amount",
        message : "Enter the Amount of Currency "
    },
    {
        type : "list",
        name : "convertCurrency",
        message : "In Which Currency do you want to Convert",
        choices : ["$","Euro","Riyal","Rs", "INRs"]
    }
]);

let result : number;
switch(ans.currentCurrency)
{
    case "$":
        if(ans.convertCurrency == "Euro")
        {
            result = ans.amount * 0.92;
            console.log(`${ans.amount}$ equals ${result}Euros`);
        }
        else if(ans.convertCurrency == "Riyal")
        {
            result = ans.amount * 3.75;
            console.log(`${ans.amount}$ equals ${result}Riyal`);
        }
        else if(ans.convertCurrency == "Rs")
        {
            result = ans.amount * 277;
            console.log(`${ans.amount}$ equals ${result}Rs`);
        }
        else if(ans.convertCurrency == "INRs")
        {
            result = ans.amount * 83;
            console.log(`${ans.amount}$ equals ${result}Indian Rs`);
        }
        break;
    case "Euro":
        if(ans.convertCurrency == "$")
        {
            result = ans.amount * 1.8;
            console.log(`${ans.amount}Euro equals ${result}$`);
        }
        else if(ans.convertCurrency == "Riyal")
        {
            result = ans.amount * 4.06;
            console.log(`${ans.amount}Euro equals ${result}Riyal`);
        }
        else if(ans.convertCurrency == "Rs")
        {
            result = ans.amount *300;
            console.log(`${ans.amount}Euro equals ${result}Rs`);
        }
        else if(ans.convertCurrency == "INRs")
        {
            result = ans.amount * 90;
            console.log(`${ans.amount}Euro equals ${result}Indian Rs`);
        }
        break;
    case "Riyal":
        if(ans.convertCurrency == "Euro")
        {
            result = ans.amount * 0.25;
            console.log(`${ans.amount}Riyal equals ${result}Euros`);
        }
        else if(ans.convertCurrency == "$")
        {
            result = ans.amount * 0.27;
            console.log(`${ans.amount}Riyal equals ${result}Riyal`);
        }
        else if(ans.convertCurrency == "Rs")
        {
            result = ans.amount * 74;
            console.log(`${ans.amount}Riyal equals ${result}Rs`);
        }
        else if(ans.convertCurrency == "INRs")
        {
            result = ans.amount * 22;
            console.log(`${ans.amount}Riyal equals ${result}Indian Rs`);
        }
        break;
    case "Rs":
        if(ans.convertCurrency == "Euro")
        {
            result = ans.amount * 0.0111;
            console.log(`${ans.amount}Rs equals ${result}Euros`);
        }
        else if(ans.convertCurrency == "Riyal")
        {
            result = ans.amount * 0.0135;
            console.log(`${ans.amount}Rs equals ${result}Riyal`);
        }
        else if(ans.convertCurrency == "$")
        {
            result = ans.amount * 0.00359624;
            console.log(`${ans.amount}Rs equals ${result}$`);
        }
        else if(ans.convertCurrency == "INRs")
        {
            result = ans.amount * 0.30;
            console.log(`${ans.amount}Rs equals ${result}Indian Rs`);
        }
        break;
    case "INRs":
        if(ans.convertCurrency == "Euro")
        {
            result = ans.amount * 0.011;
            console.log(`${ans.amount}INRs equals ${result}Euros`);
        }
        else if(ans.convertCurrency == "Riyal")
        {
            result = ans.amount * 0.045;
            console.log(`${ans.amount}INRs equals ${result}Riyal`);
        }
        else if(ans.convertCurrency == "$")
        {
            result = ans.amount * 0.012;
            console.log(`${ans.amount}INRs equals ${result}$`);
        }
        else if(ans.convertCurrency == "Rs")
        {
            result = ans.amount * 3.34;
            console.log(`${ans.amount}INRs equals ${result} Rs`);
        }
        break;
}







