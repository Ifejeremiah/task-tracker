const formContainer = document.querySelector(".create-task")
const taskContainer = document.querySelector(".con-task")
const headerBtn = document.getElementById("header-btn")
const form = document.getElementById("add-task")

const taskField = form.querySelector('#task')
const dateField = form.querySelector('#date')

let formActive


headerBtn.addEventListener('click', toggleForm)

form.addEventListener('submit', handleForm)

handleDelete()

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

  taskField.blur()
  dateField.blur()
}

function createTask() {
  const task = document.createElement('div')
  task.classList.add('task')
  task.innerHTML =
    template(taskField.value, new Date(dateField.value).toDateString())

  taskContainer.prepend(task)
}

function handleForm(evt) {
  evt.preventDefault()

  if (!taskField.value || !dateField.value)
    return

  createTask()
  clearInput()
  handleDelete()
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

function handleDelete() {
  const deleteBtn = document.getElementById('delete-icon')
  const task = document.querySelector('.task')

  deleteBtn.addEventListener('click', () => task.remove())
}
