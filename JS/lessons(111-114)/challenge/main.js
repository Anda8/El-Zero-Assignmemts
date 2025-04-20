const inputFeild = document.querySelector('input[type="text"]');
const submitButton = document.querySelector('input[type="submit"]');
const container = document.querySelector('.container');

if(localStorage.length>0){
  for (let i = 0; i < localStorage.length; i++) {
    let taskId = localStorage.key(i);
    let value = localStorage.getItem(taskId);
    createTask(value, taskId);
}
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault(); 
  if(inputFeild.value){
    let taskId = `task-id-${(Math.random() * 10000).toFixed()}`;
    localStorage[taskId] = inputFeild.value;
    createTask(inputFeild.value,taskId);
  }
})

//Task creation
function createTask(value, taskId) {
  const task = document.createElement('div');
  const button = document.createElement('button');
  const p = document.createElement('p');
  task.classList.add('task');
  p.textContent=value;
  button.textContent = 'Delete';
  task.append(p, button);
  container.append(task);
  inputFeild.value = '';
  deleteTask(button, taskId);
}


function deleteTask(button, taskId){
  button.addEventListener('click', () => {
localStorage.removeItem(taskId);
button.parentElement.remove();
  })
}