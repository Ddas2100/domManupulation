// TRAVERSING THE DOM //

var itemList = document.querySelector('#items');
// parentNode //
// console.log(itemList.parentNode);
// itemList.parentNode.style.background= '#f4f4f4';
// console.log(itemList.parentNode.parentNode);
// itemList.parentNode.parentNode.style.background= 'red';
// console.log(itemList.parentNode.parentNode).parentNode;
// itemList.parentNode.parentNode.parentNode.style.background= 'black';

// parentElement //
// console.log(itemList.parentElement);
// itemList.parentElement.style.background= '#f4f4f4';

// children //
// console.log(itemList.children);
// itemList.children[1].style.backgroundColor= 'yellow';

// firstChild //
// console.log(itemList.firstChild);
// firstElementChild //
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='hello';

// lastChild //
// console.log(itemList.lastChild);
// lastElementChild //
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='hello';

// nextSibling //
// console.log(itemList.nextSibling);
// nextElementSibling //
// console.log(itemList.nextElementSibling);

// previousSibling //
// console.log(itemList.previousSibling);
// previousElementSibling //
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color= 'blue';

// createElement //
var newDiv= document.createElement('div');
newDiv.className= 'hello'; //add class
newDiv.id= 'hello1'; //add id
newDiv.setAttribute('title', 'Hello Div'); //add attribute
var newDivText= document.createTextNode('Hello World'); //create text node
newDiv.appendChild(newDivText); //add text to div 

var container= document.querySelector('body .list-group');
var h1= document.querySelector('li')
console.log(newDiv);
newDiv.style.fontSize= '20px';
newDiv.style.color='red';
container.insertBefore(newDiv, h1);


var newDiv= document.createElement('div');
newDiv.className= 'hello'; //add class
newDiv.id= 'hello1'; //add id
newDiv.setAttribute('title', 'Hello Div'); //add attribute
var newDivText= document.createTextNode('Hello World'); //create text node
newDiv.appendChild(newDivText); //add text to div 

var container= document.querySelector('header .container');
var h1= document.querySelector('header h1')
console.log(newDiv);
newDiv.style.fontSize= '20px';
container.insertBefore(newDiv, h1);