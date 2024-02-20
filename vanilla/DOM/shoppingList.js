const list = document.querySelector("#list");
const input = document.querySelector('#item');
const button = document.querySelector("#submitBtn")

addItem = () => {
  console.log(input.value)

  let item = document.createElement('li');
  item.textContent = input.value;
  console.log(item);

  
  list.appendChild(item);
  input.value = ''
}

button.addEventListener('click', addItem);