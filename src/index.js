import fs from 'fs';
import readlineSync from 'readline-sync';
import { v4 as uuid } from 'uuid'; 

  readlineSync.promptCLLoop({
    add: (description) => {

      const todo = {
        id: uuid(),
        description,
        status: "todo"
      };
      
      const finalTodo = JSON.stringify(todo, null, 2);

      fs.writeFileSync('todo.json', finalTodo, 'utf8', 
        (error) => {
          if(error) {
            console.log('problem while writing in file.', error);
          }

          console.log("Task written successfully.")
        })
        return true;
    }
  })

