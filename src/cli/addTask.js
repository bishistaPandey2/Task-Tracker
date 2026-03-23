
import fs from 'fs';

const addTask = (description) => {
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
    fs.writeFileSync('../todo.json', JSON.stringify(todo, null, 2), 'utf8', 
      (error) => {
         if(error) {
          console.log('problem while writing in file.', error);
        }
          console.log("Task written successfully.");
     });

    return true;
}

export{addTask};

