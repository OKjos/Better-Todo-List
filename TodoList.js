
renderTodoList();
function renderTodoList() {
  let todoListHTML = '';
  todoList.forEach ((todoObject, index ) => {
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-todo-button js-delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  });
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
    });
  });
};

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
});

function addTodo() {
  inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  inputElement = document.querySelector('.js-due-date-input');
  const dueDate = inputElement.value;

  todoList.push({
    name,
    dueDate
  });
  inputElement.value = '';
  renderTodoList();
};


document.getElementById('myDropdown').addEventListener('change', function() {
  console.log('change')
  let selectedId = this.value;
  console.log(selectedId);

  let cost1Element = document.getElementById('cost-1');
  let cost1Value = cost1Element.dataset.cost; 
  console.log('test');

  const chance = (100 * unitsInPlayInput) / cost1Value;
  console.log('chance:', chance);
  console.log(document.getElementById('myDropdown'))
  console.log(document.getElementById('cost-1'))
});