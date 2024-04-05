#!/usr/bin/env node
console.log(chalk.yellowBright.bold(`\n\n\t\t\t\t\tWelcome to ToDo list: `));
import inquirer from "inquirer";
import chalk from "chalk";
let toDos = [];
let loop = true;
while (loop) {
    let questions = await inquirer.prompt([
        {
            name: "q1",
            type: "list",
            message: chalk.bold.cyanBright("\nWhat do you want to do in your array? "),
            choices: [
                "Add something",
                "Remove something",
                "View List",
                "Delete full array",
                "Exit",
                "Info",
            ],
        },
    ]);
    if (questions.q1 === "Add something") {
        let q1a = await inquirer.prompt([
            {
                name: "a",
                type: "list",
                message: chalk.greenBright("\nAt which position do you want to add?"),
                choices: ["At start", "At end"],
            },
        ]);
        if (q1a.a === "At start") {
            let q1aa = await inquirer.prompt([
                {
                    name: "start",
                    type: "input",
                    message: chalk.blueBright("Enter a task to add at start: "),
                },
            ]);
            console.log(chalk.magentaBright(`Added "${q1aa.start}" successfully!`));
            toDos.unshift(q1aa.start);
            console.log(toDos);
        }
        else if (q1a.a === "At end") {
            let q1ab = await inquirer.prompt([
                {
                    name: "end",
                    type: "input",
                    message: chalk.blueBright("Enter a task to add at end: "),
                },
            ]);
            console.log(chalk.magentaBright(`Added "${q1ab.end}" successfully!`));
            toDos.push(q1ab.end);
            console.log(toDos);
        }
    }
    else if (questions.q1 === "Remove something") {
        console.log(toDos);
        let q1b = await inquirer.prompt([
            {
                name: "b",
                type: "number",
                message: chalk.greenBright("\nEnter the index of task you wanna remove (Array start from 0): "),
            },
        ]);
        console.log(chalk.magentaBright(`Removed "${q1b.b}" successfully!`));
        toDos.splice(q1b.b, 1);
        console.log(toDos);
    }
    else if (questions.q1 === "View List") {
        console.log(toDos);
    }
    else if (questions.q1 === "Delete full array") {
        let q1c = await inquirer.prompt([
            {
                name: "sure",
                type: "confirm",
                message: chalk.greenBright("Are you sure you want to delete your list? "),
                default: "true",
            },
        ]);
        console.log(chalk.magentaBright(`Deleted full list successfully!`));
        toDos.length = 0;
        console.log(toDos);
    }
    else if (questions.q1 === "Exit") {
        break;
    }
    else if (questions.q1 === "Info") {
        console.log(`\t\t A simple To Do list made by using Typescipt, JavaScript, Inquirer and Chalk.
       \t\t Author: Muhammad Nofil Shoaib.
       \t\t Version: 1.0.0.`);
    }
}
