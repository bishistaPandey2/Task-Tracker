import fs from 'fs';
import readlineSync from 'readline-sync';
import { v4 as uuid } from 'uuid'; 

readlineSync.promptCLLoop({
  add: (description) => {
    let tasks = [];
    
    //Extracting or reading data from file.
    if(fs.existsSync('../todo.json')){
      const data = fs.readFileSync('../todo.json', 'utf8');
      if(data !== undefined){
        tasks = JSON.parse(data);
      }
    }

    //Creating an array for todo.
    const todo =[];
     
    // If task already exists pushing it back.
    if(tasks.length !== 0){
      let i;
      for(i = 0; i<tasks.length; i++){
        todo.push(tasks[i]);
      }
    };

    // Pushing new tasks.
    todo.push(
      {
        id: undefined,
        description,
        status: "todo",
        createdAt: new Date,
        updatedAt: new Date
      } 
    );

    //providing id to those tasks.
    todo.map(element => {
      for(let i = 0; i<todo.length; i++){
        todo[i].id = i+1;
      }
    });

    //Writing it in the file.
    fs.writeFile('../todo.json', JSON.stringify(todo, null, 2), 'utf8', 
      (error) => {
         if(error) {
          console.log('problem while writing in file.', error);
        }
          console.log("Task written successfully.");
     });

    return true;
  },

  update: (id, description) => {

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
      fs.writeFile('../todo.json', JSON.stringify(tasks, null, 2), 'utf8',
       (error) => {
         if(error) {
           console.log('Problem while writing file.', error);
         }
            console.log("Task updated successfully");
      });
    }

    return true;
  },

  delete: (id) => {

    if(parseInt(id) < 0 || parseInt(id) === 0){
      console.log("Please provide correct Id.")
    }

    if(parseInt(id) > 0 && parseInt(id) !== 0){
      let tasks = [];

      //Read from the file if the file exists.
      if(fs.existsSync('../todo.json')){
        const data = fs.readFileSync('../todo.json', 'utf8');
        if(data !== undefined){  //Runs only if there is something in the box.
          tasks = JSON.parse(data);
        }
      };

      //Matching the use given id into the ) order array element.
      let actualId = parseInt(id) - 1;

      //Removing from the array of task objects.
      if(tasks.length !== 0){
        tasks.splice(actualId, 1);
      };

      //Re-assigining new ids to the elements or objects.
      for(let i = 0; i<tasks.length; i++){
        tasks[i].id = i+1;
      }


      //Finally writing th data to the file.
      fs.writeFile('../todo.json', JSON.stringify(tasks, null, 2), 'utf8', (error) => {
        if(error){
          console.log("Problem while deleting from file.")
        }

        console.log(`Id:${id} is successfully deleted from the file.`)
      });
    }

    return true;
  }
});
