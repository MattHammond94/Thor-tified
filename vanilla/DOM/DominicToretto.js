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

// Remove the element from the DOM:
// container.removeChild(div);

// Tasks: 
const redP = document.createElement('p');

redP.textContent = "Hey, I'm Red!";

redP.setAttribute('style', 'color: red;');

const blueHeader = document.createElement('h3');

blueHeader.textContent = "I'm a blue h3!";

blueHeader.setAttribute('style', 'color: blue;');

container.appendChild(redP);
container.insertBefore(blueHeader, redP);

const blackBorder = document.createElement('div');

blackBorder.setAttribute('style', 'border: 10px solid black; background-color: pink');

blackBorder.innerHTML = "<h1>I'm In a div</h1><p>ME TOO!</p>"

container.appendChild(blackBorder);

