const formContainer = document.querySelector(".create-task")
const form = document.getElementById("add-task")
const task = document.querySelector(".task")
const taskContainer = document.querySelector(".con-task")
const headerBtn = document.getElementById("header-btn")

const taskField = form.querySelector('#task')
const dateField = form.querySelector('#date')

let formActive

headerBtn.addEventListener('click', toggleForm)

form.addEventListener('submit', handleForm)

function toggleForm() {
  formContainer.classList.toggle('active')
  if (!formActive) formActive = true
  else formActive = false
  handleBtn()
}

function handleBtn() {
  if (formActive) {
    headerBtn.classList.add('active')
    headerBtn.innerText = 'Close'
  } else {
    headerBtn.classList.remove('active')
    headerBtn.innerText = 'Add'
  }
}

function clearInput() {
  taskField.value = ''
  dateField.value = ''
}

function createTask() {
  const task = document.createElement('div')
  task.classList.add('task')
  task.innerHTML = template(taskField.value, dateField.value)

  taskContainer.prepend(task)
}

function handleForm(evt) {
  evt.preventDefault()

  if (!taskField.value && !dateField.value)
    return

  createTask()
  clearInput()
}

function template(title, date) {
  return `
    <div>
      <h2 class="title">${title}</h2>
      <p>${date}</p>
    </div>
    <div class="delete pointer" id="delete-icon">
      <i class="fa-regular fa-trash-can"></i>
    </div>
  `
}
