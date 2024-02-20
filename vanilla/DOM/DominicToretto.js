const container = document.querySelector('#container');
console.dir(container.firstElementChild);                     

const controls = document.querySelector('.controls');   
console.dir(controls.previousElementSibling);

// ========================================================

// Declaring a new element as below creates the element in memory
const div = document.createElement('div');

// Set attributes to new element in memory:
div.setAttribute('style', 'color: blue; background: white;'); 

// Set an id for the new element:
// div.setAttribute('id', 'theDiv');   

// Add div to the classList:
div.classList.add('new')

// Add text content to new element
div.textContent = 'Hello World'

// Add inner HTML to new element
// div.innerHTML = '<span>Hello again</span>';

// New element is then added to the dom as below:
container.appendChild(div)
// document.insertBefore(div, div);

// Remove the element from the DOM:
// container.removeChild(div);

