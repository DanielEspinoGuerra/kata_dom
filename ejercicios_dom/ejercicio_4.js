// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click
const btnToClick = document.createElement('button');
btnToClick.id = 'btnToClick';
btnToClick.textContent = 'Pulsa aquí';
const inputClick = document.querySelector('.click');
document.body.appendChild(btnToClick);
btnToClick.addEventListener('click', () => {
    console.log(inputClick.value);
});

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const inputFocus = document.querySelector('.focus');
inputFocus.addEventListener('focus', (event) => {
    console.log(event.target.value);
});

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const inputValue = document.querySelector('.value');
inputValue.addEventListener('input', (event) => {
    console.log(event.target.value);
});