//import * as inquirer from 'inquirer';
import * as readlineSync from 'readline-sync';

const starsbar: string = "*****************************************************";
const welcomeMsg: string = "*                     WELCOME                       *";

console.log(starsbar);
console.log(welcomeMsg);
console.log(starsbar);

const name = readlineSync.question('What is your name? ');
console.log(`Hello, ${name}!`);

const optionsTask: string[] = [
  '1. Add a new task',
  '2. Delete a task',
  '3. Status of the task'
] ;
for (let i = 0; i < optionsTask.length; i++) {

    console.log(`-${optionsTask[i]}`);
};
//const question: inquirer.QuestionCollection = [
  //{
    //type: 'list',
    //name: 'selectedOption',
    //message: 'Choose an option:',
    //choices: optionsTask,
  //},
//];

//inquirer.prompt(questions).then((answers) => {
  //console.log(`You selected: ${answers.selectedOption}`);
//});
