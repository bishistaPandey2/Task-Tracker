
import fs from 'fs';

const markDone = (id) => {

  let tasks = [];
  if(fs.existsSync('../todo.json')){
    const data = fs.readFileSync('../todo.json', 'utf8');
      if(data !== undefined){
        tasks = JSON.parse(data);
      };
  };
  const actualId = id - 1;
  if(tasks.length !== 0){
    tasks[actualId].status = "done";
  };

  fs.writeFileSync('../todo.json', JSON.stringify(tasks, null, 2), 'utf8', (error) => {
    if(error){
      console.log("Error while writing in the file.")
    }

    console.log("Status of task changed");
  })
};

const markInProgress = (id) => {

  let tasks = [];
  if(fs.existsSync('../todo.json')){
    const data = fs.readFileSync('../todo.json', 'utf8');
      if(data !== undefined){
        tasks = JSON.parse(data);
      };
  };
  const actualId = id - 1;
  if(tasks.length !== 0){
    tasks[actualId].status = "in-progress";
  };

  fs.writeFileSync('../todo.json', JSON.stringify(tasks, null, 2), 'utf8', (error) => {
    if(error){
      console.log("Error while writing in the file.")
    }

    console.log("Status of task changed");
  })
};

export{
  markDone,
  markInProgress
};
