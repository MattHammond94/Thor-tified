const list = document.querySelector("#list");
const input = document.querySelector('#item');
const button = document.querySelector("#submitBtn")

addItem = () => {
  let item = document.createElement('li');
  item.textContent = input.value;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = "Delete";
  item.appendChild(deleteButton);

  list.appendChild(item);
  input.value = ''
  input.focus();

  deleteItem = () => {
    list.removeChild(item);
  }
  deleteButton.addEventListener('click', deleteItem);
}

button.addEventListener('click', addItem);
