import fs from 'fs';
import { addTask } from "./cli/addTask.js";
import { updateTask } from "./cli/updateTask.js";
import { removeTask } from "./cli/removeTask.js";
import { 
  listTasks,
  listTasksDone,
  listTasksInProgress
} from "./cli/listTasks.js";
import { 
  markDone,
  markInProgress
} from "./cli/markTask.js";
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'todo-cli '
});

rl.prompt();

rl.on('line', (line) => {
  const [command, arg1] = line.split(' ');

  //For adding task.
  if(command === 'add'){
    addTask(arg1);
  }

  //For removing task.
  if(command === 'remove'){
    if( arg1 !== undefined){
      removeTask(arg1);
      console.log(`Id:${arg1} reoved successfully.`)
    }
    else {
      console.log("Provide index to remove.")
    }
  }

  //For listing tasks.
  if(command === 'list' && arg1 === undefined){
    listTasks();
  }

  if(command === 'mark-done'){
    markDone(arg1);
  }

  if(command === 'mark-in-progress'){
    markInProgress(arg1);
  }

  if(command === 'list' && arg1 === 'done'){
    listTasksDone();
  }

  if(command === 'list' && arg1 === 'in-progress'){
    listTasksInProgress();
  }



  rl.prompt();
}).on('close', () => {
  console.log("\nHave a great day.");
  process.exit(0);
});
