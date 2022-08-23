document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form');
  const input = document.querySelector('#new-task-description');
  form.addEventListener('submit', (e) => {
  e.preventDefault();
  const list = document.createElement('li');
  const tasks = document.querySelector('#tasks');
  const btn = document.createElement('button');
  btn.addEventListener('click', (e)=> {
    e.target.parentNode.remove();
  })
  btn.textContent = 'x';
  list.textContent = `${input.value} `;
  let dropDown = document.querySelector('#drop-down').value;
if (dropDown === 'high-priority'){
  list.style.color = 'red';
}else if (dropDown === 'medium-priority'){
  list.style.color = 'yellow';
}else if (dropDown === 'low-priority'){
  list.style.color = 'green';}
  list.appendChild(btn);
  tasks.appendChild(list)
  e.target.input.value
   }   
)})

// function determinePriority(){
// let priority = document.querySelector('#drop-down');
// let dropDownValue = priority.options;
// let text = li.textContent;
// if (priority === 'high-priority'){
//   text.style.color = 'red';
// }else if (priority === 'medium-priority'){
//   text.style.color = 'yellow';
// }else if (priority === 'low-priority'){
//   text.style.color = 'green';
// }}
// determinePriority(target.input.value);

