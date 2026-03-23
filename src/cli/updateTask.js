
import fs from 'fs';

const updateTask = (id, description) => {

    if(parseInt(id) < 0 || parseInt(id) === 0){
      console.log("Please provide correct Id.")
    }

    if(parseInt(id) > 0 && parseInt(id) !== 0){

      let tasks = [];

      //Extracting data from the file.
      if(fs.existsSync('../todo.json')){
        const data = fs.readFileSync('../todo.json', 'utf8');
        if(data !== undefined){
          tasks = JSON.parse(data);
        }
      }

      //If data exista then appending.
      if(tasks.length !== 0){
        const actualId = parseInt(id) - 1;
        tasks[actualId].description = description;
        tasks[actualId].updatedAt = new Date();
      }

      // rewriting the appended data in the file. 
      fs.writeFileSync('../todo.json', JSON.stringify(tasks, null, 2), 'utf8',
       (error) => {
         if(error) {
           console.log('Problem while writing file.', error);
         }
            console.log("Task updated successfully");
      });
    }

    return true;
  }

export{updateTask};
