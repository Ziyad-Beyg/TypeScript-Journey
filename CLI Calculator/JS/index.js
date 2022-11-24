import inquirer from "inquirer";
import chalk from 'chalk';
let inputs = [
    {
        name: 'num1',
        type: "number",
        message: 'Enter first Number: ',
    },
    {
        name: 'num2',
        type: "number",
        message: 'Enter Second Number: '
    },
    {
        name: 'operation',
        type: "list",
        choices: ['Addition (+)', 'Subtraction (-)', 'Multiplication (*)', 'Division (/)'],
        message: 'Choose your operation: '
    }
];
// let input1 = await inquirer.prompt([{
//     name: 'num1',
//     type: "number",
//     message: 'Enter first Number: '
// }])
// let input2 = await inquirer.prompt([{
//     name: 'num2',
//     type: "number",
//     message: 'Enter Second Number: '
// }])
// let operator = await inquirer.prompt([{
//     name: 'operation',
//     type:"list",
//     choices: ['Addition (+)', 'Subtraction (-)', 'Multiplication (*)', 'Division (/)'],
//     message: 'Choose your operation: '
// }])
let { num1, num2, operation } = await inquirer.prompt(inputs);
// console.log(chalk.bold(` Number1: ${num1}\n Number2: ${num2}\n Operation: ${operation}\n\n ${chalk.hex('#64ACA4')(num1)} + ${chalk.blueBright(num2)} = ${chalk.blueBright(num1 + num2)} `))
switch (operation) {
    case 'Addition (+)':
        // console.log(chalk.blueBright(`\n${operator.operation}:\n${input1.num1} + ${input2.num2} = ${input1.num1 + input2.num2}\n`) )
        console.log(chalk.bold.hex('#808080')(` \nNumber1: ${chalk.hex('#64ACA4')(num1)}\n Number2: ${chalk.hex('#64ACA4')(num2)}\n Operation: ${chalk.hex('#64ACA4')(operation)}\n\n ${chalk.hex('#64ACA4')(num1)} + ${chalk.hex('#64ACA4')(num2)} = ${chalk.hex('#64ACA4')(num1 + num2)} \n`));
        break;
    case 'Subtraction (-)':
        // console.log(chalk.blueBright(`\n${operator.operation}:\n${input1.num1} - ${input2.num2} = ${input1.num1 - input2.num2}\n`) )
        console.log(chalk.bold.hex('#808080')(` \nNumber1: ${chalk.hex('#64ACA4')(num1)}\n Number2: ${chalk.hex('#64ACA4')(num2)}\n Operation: ${chalk.hex('#64ACA4')(operation)}\n\n ${chalk.hex('#64ACA4')(num1)} - ${chalk.hex('#64ACA4')(num2)} = ${chalk.hex('#64ACA4')(num1 - num2)} \n`));
        break;
    case 'Multiplication (*)':
        // console.log(chalk.blueBright(`\n${operator.operation}:\n${input1.num1} * ${input2.num2} = ${input1.num1 * input2.num2}\n`) )
        console.log(chalk.bold.hex('#808080')(` \nNumber1: ${chalk.hex('#64ACA4')(num1)}\n Number2: ${chalk.hex('#64ACA4')(num2)}\n Operation: ${chalk.hex('#64ACA4')(operation)}\n\n ${chalk.hex('#64ACA4')(num1)} * ${chalk.hex('#64ACA4')(num2)} = ${chalk.hex('#64ACA4')(num1 * num2)} \n`));
        break;
    case 'Division (/)':
        // console.log(chalk.blueBright(`\n${operator.operation}:\n${input1.num1} / ${input2.num2} = ${input1.num1 / input2.num2}\n`) )
        console.log(chalk.bold.hex('#808080')(` \nNumber1: ${chalk.hex('#64ACA4')(num1)}\n Number2: ${chalk.hex('#64ACA4')(num2)}\n Operation: ${chalk.hex('#64ACA4')(operation)}\n\n ${chalk.hex('#64ACA4')(num1)} / ${chalk.hex('#64ACA4')(num2)} = ${chalk.hex('#64ACA4')(num1 / num2)} \n`));
        break;
    default:
        console.log(chalk.redBright(`\nYou didn't  select a valid operation\n`));
        break;
}
// console.log(chalk.blueBright(input1.num1, input2.num2, operator.operation))
