
import fs from 'fs'

const removeTask = (id) => {

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
      fs.writeFileSync('../todo.json', JSON.stringify(tasks, null, 2), 'utf8', (error) => {
        if(error){
          console.log("Problem while deleting from file.")
        }

        console.log(`Id:${id} is successfully deleted from the file.`)
      });
    }

    return true;
  }

export{removeTask};
