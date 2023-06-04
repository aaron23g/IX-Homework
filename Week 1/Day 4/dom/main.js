console.log('We are connected!');

// Examining the DOM

let dom;
dom = document;
console.log(dom);
console.log(dom.all);
console.log(dom.all.length);
console.log(dom.all[9]);
console.log(dom.forms);
console.log(dom.forms[0].id);

// Documents object methods allow us to pull things from the DOM
// In Vanilla JS we have single and multiple element selectors
// Single element selectors grab 1 element by id or class
// Multiple element selectors will return a list of elements

// An HTMLCollection is a collection of document elements.
// A NodeList is a collection of document nodes
//  (element nodes, attribute nodes, and text nodes).
// HTMLCollection items can be accessed by their name, id, or index number.
// NodeList items can only be accessed by their index number.

// Single element selectors
console.log('Single element selectors');

// Get an element by ID
let button = dom.getElementById('button');
console.log(button);

// Get things from the element
console.log(button.id);
console.log(button.className);

// Fetch the table
let table = dom.getElementById('table');
console.log(table);

// Fetch marks cell
let cell = dom.getElementById('marks-cell');
console.log(cell);
cell.innerHTML = 'Cameron';

// Multiple element selectors
console.log('Multiple element selectors');

// Used for more then 1 element
// html collection or a node list
// converted to arrays

let tables = dom.getElementsByClassName('table');
console.log(tables);

// Get table from array
console.log(tables[0]);
console.log(tables[1]);

// Get the length
console.log(tables.length);

// Get elements by tag name
let tableBodies = dom.getElementsByTagName('tbody');
console.log(tableBodies);

// Query Selector
console.log('Query Selector');
// By ID
console.log(dom.querySelector('#table'));
console.log(dom.querySelector('#table2'));

// By class name
console.log(dom.querySelector('.card'));

// By element name
console.log(dom.querySelector('h1'));

// Change table 2 row 1 Last name
let tableTwo = dom.querySelector('#table2');
console.log(tableTwo);
let marksRow = tableTwo.querySelector('tr td:nth-child(3)');
console.log(marksRow);
marksRow.innerHTML = 'Kirkpatrick';

// Create elements & add attributes
let body = dom.body;
console.log(body);
let elem = dom.createElement('div');
elem.classList.add('custom-div');
elem.innerHTML = 'We created this DIV with JavaScript';
body.appendChild(elem);

// Event listeners & the event object

dom.querySelector('#button').addEventListener('click', onClick);

function onClick(event) {
  console.log('I am a button that has been clicked!');

  let val;
  val = event;
  console.log(val);

  // Event target element
  val = event.target;
  console.log(val);
  val = event.target.id;
  console.log(val);
  val = event.target.className;
  console.log(val);

  // Change the inner text
  event.target.innerHTML = 'Hello';

  // Co-ordinates relative to window
  val = event.clientY;
  console.log(val);
  val = event.clientX;
  console.log(val);

  // Co-ordinates relative to element itself
  val = event.offsetY;
  console.log(val);
  val = event.offsetX;
  console.log(val);
}

// Add a mouse enter to the button
button.addEventListener('mouseenter', (event) => {
  console.log(event);
});

// Add a mouse leave event
button.addEventListener('mouseleave', () => {
  console.log('We left the button');
});

// Local storage

localStorage.setItem('name', 'Cameron');
localStorage.setItem('surname', 'Kirkpatrick');

// Get things from local storage
let name = localStorage.getItem('name');
console.log(name);
let surname = localStorage.getItem('surname');
console.log(surname);

// Clear 1 thing
localStorage.removeItem('surname');

// Clear everything
localStorage.clear();

// Add event to the button
function onButtonClicked() {
  console.log('I like this method better');
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log('Hello');

  let input = dom.getElementById('input-example');
  console.log(input.value);
  input.value = '';
}


