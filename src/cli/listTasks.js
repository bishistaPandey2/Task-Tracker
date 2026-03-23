
import fs from 'fs';

const listTasks = () => {

    let tasks = [];

    if(fs.existsSync('../todo.json')){
      const data = fs.readFileSync('../todo.json', 'utf8');
      if(data != undefined){
        tasks = JSON.parse(data)
      }
    }

    console.log(tasks);
    return true;
  }

export{listTasks};
