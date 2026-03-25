
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

const listTasksDone = () => {
  let tasks = [];

  if(fs.existsSync('../todo.json')){
    const data = fs.readFileSync('../todo.json', 'utf8');
    if(data != undefined){
      tasks = JSON.parse(data)
    }
  }

  const doneTasks = tasks.filter((item) => item.status === 'done');

  console.log(doneTasks)
  return true;
}

const listTasksInProgress = () => {
  let tasks = [];

  if(fs.existsSync('../todo.json')){
    const data = fs.readFileSync('../todo.json', 'utf8');
    if(data != undefined){
      tasks = JSON.parse(data)
    }
  }

  const doneTasks = tasks.filter((item) => item.status === 'in-progress');

  console.log(doneTasks)
  return true;
}


const listTasksTodo = () => {
  let tasks = [];

  if(fs.existsSync('../todo.json')){
    const data = fs.readFileSync('../todo.json', 'utf8');
    if(data != undefined){
      tasks = JSON.parse(data)
    }
  }

  const doneTasks = tasks.filter((item) => item.status === 'todo');

  console.log(doneTasks)
  return true;
}



export{
  listTasks,
  listTasksDone,
  listTasksInProgress,
  listTasksTodo
};
