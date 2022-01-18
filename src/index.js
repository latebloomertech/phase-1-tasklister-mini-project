// const init = () => {
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildToDo(e.target.elements[0].value)
    console.log(e.target.elements[0].value)
    form.reset()
  })
// }

function buildToDo(todo) {
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  li.textContent = `${todo} `
  li.appendChild(btn)
  console.log(li)
  document.getElementById('tasks').appendChild(li)
}
function handleDelete(e) {
  e.target.parentNode.remove()
}
// document.addEventListener('DOMContentLoaded', init);
