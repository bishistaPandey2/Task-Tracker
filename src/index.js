import fs from 'fs';
import readlineSync from 'readline-sync';
import { v4 as uuid } from 'uuid'; 

readlineSync.promptCLLoop({
  add: (description) => {
    let tasks = [];
    
    if(fs.existsSync('todo.json')){
      const data = fs.readFileSync('todo.json', 'utf8');
      tasks = JSON.parse(data);    
    }
    const todo =[ 
      {
        description,
        status: "todo",
        createdAt: new Date,
        updatedAt: new Date
      } 
    ];
     
    if(tasks.length !== 0){
      let i;
      for(i = 0; i<tasks.length; i++){
        todo.push(tasks[i]);
      }
    };

    fs.writeFile('todo.json', JSON.stringify(todo, null, 2), 'utf8', 
      (error) => {
         if(error) {
         console.log('problem while writing in file.', error);
       }
        console.log("Task written successfully.")
     })
    return true;
  }
});

