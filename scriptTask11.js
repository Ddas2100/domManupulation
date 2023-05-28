const myForm= document.querySelector('#my-form');
const nameInput= document.querySelector('#name');
const emailInput= document.querySelector('#email');
const msg= document.querySelector('.msg');
const userList= document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML= 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    } else {
        var userDetails= {name: nameInput.value, email: emailInput.value};
        // userDetailsArr.push(nameInput.value);
        // userDetailsArr.push(emailInput.value);
        localStorage.setItem('User Details', JSON.stringify(userDetails));
        let details= JSON.parse(localStorage.getItem('User Details'));
        console.log(details);
        // localStorage.setItem('userName', nameInput.value);
        // localStorage.setItem('userEmail', emailInput.value);
        nameInput.value= '';
        emailInput.value= '';
    }
}