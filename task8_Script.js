var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form Submit Event
form.addEventListener('submit', addItem);
//Delete event
itemList.addEventListener('click', removeItem);

// Add Item
function addItem(e) {
    e.preventDefault();

    // Get Input Value
    var newItem= document.getElementById('item').value;

    //create new li element
    var li= document.createElement('li');
    li.className= 'list-group-item'; //add class name
    li.appendChild(document.createTextNode(newItem)); //add textNode with inpur value

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