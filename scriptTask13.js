const myForm= document.querySelector('#my-form');
const msg= document.querySelector('.msg');
const userList= document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(event) {
    event.preventDefault();
    
    const name= event.target.name.value;
    const email= event.target.email.value;
    const phone= event.target.phoneNumber.value;
    const obj= {name , email , phone};

    if(obj.name === '' || obj.email === '' || obj.phone === '') {
        msg.classList.add('error');
        msg.innerHTML= 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li= document.createElement('li');
        var deleteBtn = document.createElement('button');
        deleteBtn.className= 'btn';
        deleteBtn.appendChild(document.createTextNode('Delete'));
        
        li.appendChild(document.createTextNode(`User Details: ${obj.name} , ${obj.email} , ${obj.phone}`));
        li.appendChild(deleteBtn);
        userList.appendChild(li);

        localStorage.setItem(obj.name, JSON.stringify(obj));
        console.log(JSON.parse(localStorage.getItem(obj.name)));
        
        event.target.name.value = '';
        event.target.email.value = '';
        event.target.phoneNumber.value = '';

    }    
}

userList.addEventListener('click', removeItem);
function removeItem(event) {
    if(event.target.classList.contains('btn')) {
        if(confirm('Are you sure?')) {
            var li= event.target.parentElement;
            userList.removeChild(li);
        }
    }
}

