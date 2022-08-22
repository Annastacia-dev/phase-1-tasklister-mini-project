document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form');
  const input = document.querySelector('#new-task-description');
  form.addEventListener('submit', (e) => {
  e.preventDefault();
  const li = document.createElement('li');
  const tasks = document.querySelector('#tasks');
  const btn = document.createElement('button');
  btn.addEventListener('click', (e)=> {
    e.target.parentNode.remove();
  })
  btn.textContent = 'x';
  li.textContent = `${input.value} `;
  li.appendChild(btn);
  tasks.appendChild(li)
  e.target.input.value
   }   
)})



