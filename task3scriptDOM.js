// EXAMINE THE DOCUMENT OBJECT //

// console.log(document.domain);
// console.log(document.head);
// console.log(document.URL); 
// console.log(document.body);
// console.log(document.doctype);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);

// GETELEMENTBYID //

// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent='Hello';
// console.log(headerTitle.textContent);
// headerTitle.innerText = 'Good bye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h1> Hello World </h1>';
// header.style.borderBlock = 'solid 3px black';

// GETELEMENTBYCLASSNAME //

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='Hello World';
// items[1].style.fontWeight= 'bold';
// items[1].style.backgroundColor= 'yellow';
// for(var i=0; i<items.length; i++) {
//     items[i].style.backgroundColor='#f4f4f4';
//     items[i].style.fontWeight= 'bold';
// }

// GETELEMENTBYTAGNAME //

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent='Hello World';
// li[1].style.fontWeight= 'bold';
// li[1].style.backgroundColor= 'yellow';
// for(var i=0; i<li.length; i++) {
//     li[i].style.backgroundColor='#f4f4f4';
//     li[i].style.fontWeight= 'bold';
// }

// QUERYSELECTOR //

// var header= document.querySelector('#main-header');
// header.style.borderBottom= 'solid 4px black';

// var input= document.querySelector('input');
// input.value= 'Hello World';

// var submit= document.querySelector('input[type="submit"]');
// submit.value="SEND";

// var item= document.querySelector('.list-group-item');
// item.style.color='red';

// var lastItem= document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue';

// var secondItem= document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color='orange';

// var thirdItem= document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.color='green';

// QUERYSELECTORALL //

var titles= document.querySelectorAll ('.title');
console.log(titles);
titles[0].style.fontWeight= 'bold';
titles[0].style.color= 'green'; 

// var odd=document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');
// for(var i=0; i<odd.length; i++) {
//     odd[i].style.backgroundColor='#f4f4f4';
//     even[i].style.backgroundColor='#ccc';
// }

// var header= document.getElementById('header-title');
// console.log(header);
// header.style.color='yellow';

