var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
var description = document.getElementById('description');

// Form Submit Event
form.addEventListener('submit', addItem);

//Delete event
itemList.addEventListener('click', removeItem);
//filter event
filter.addEventListener('keyup', filterItems);
filter.addEventListener('keyup', filterDescription);

// Add Item
function addItem(e) {
    e.preventDefault();

    // Get Input Value (item+description)
    var newItem= document.getElementById('item').value;
    var newDescription= document.getElementById('description').value;

    //create new li element
    var li= document.createElement('li');
    li.className= 'list-group-item'; //add class name
    li.appendChild(document.createTextNode(newItem)); //add textNode with input value (first input box)
    li.appendChild(document.createTextNode(" " + newDescription)); //add textNode with input value (second input box)


    //create delete button element
    var deleteBtn = document.createElement('buuton');
    deleteBtn.className= 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('Delete'));
    li.appendChild(deleteBtn); //append delete button to li
    itemList.appendChild(li); //append li to list

    var editBtn = document.createElement('buuton');
    editBtn.className= 'btn btn-success btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn); //append edit button to li
    itemList.appendChild(li); //append li to list
}

// remove item
function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('Are you sure?')) {
            var li= e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


// Filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an arrayp
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      var description= item.childNodes[1].textContent;
      if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

