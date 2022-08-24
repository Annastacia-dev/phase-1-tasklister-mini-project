document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form');
  const input = document.querySelector('#new-task-description');
  form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Creating list and delete button elements
  
  const list = document.createElement('li');
  const tasks = document.querySelector('#tasks');
  const deletebtn = document.createElement('button');
  deletebtn.addEventListener('click', (e)=> {
    e.target.parentNode.remove();
  })
  deletebtn.textContent = 'x';
  list.textContent = `${input.value} `;
  let dropDown = document.querySelector('#drop-down').value;

  // Assign color according to priority
if (dropDown === 'high-priority'){
  list.style.color = 'red';
}else if (dropDown === 'medium-priority'){
  list.style.color = 'yellow';
}else if (dropDown === 'low-priority'){
  list.style.color = 'green';}
  
  // Append list and delete button
  list.appendChild(deletebtn);
  tasks.appendChild(list)
  e.target.input.value
   }   
)})



