// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const lista = document.createElement('ul');
let nuevoLi;
let textoLi;
for(const country of countries) {
    nuevoLi = document.createElement('li');
    textoLi = document.createTextNode(country);
    nuevoLi.appendChild(textoLi);
    lista.appendChild(nuevoLi);
}
document.body.appendChild(lista);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
document.querySelector(".fn-remove-me").remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const divPrint = document.querySelector("[data-function='printHere']");
const lista2 = document.createElement('ul');
for(const car of cars) {
    nuevoLi = document.createElement('li');
    textoLi = document.createTextNode(car);
    nuevoLi.appendChild(textoLi);
    lista2.appendChild(nuevoLi);
}
divPrint.appendChild(lista2);

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
const divs = document.createElement('div');
for(const country of countries2) {
    const nuevoDiv = document.createElement('div');
    const h4 = document.createElement('h4');
    const img = document.createElement('img');
    h4.textContent = country.title;
    img.src = country.imgUrl;
    nuevoDiv.appendChild(h4);
    nuevoDiv.appendChild(img);
    divs.appendChild(nuevoDiv);
}
document.body.appendChild(divs);

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la serie de divs.
const btnRemove = document.createElement('button');
btnRemove.textContent = 'Eliminar último';
document.body.appendChild(btnRemove);
btnRemove.addEventListener('click', () => {
    divs.removeChild(divs.lastElementChild);
});

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// divs que elimine ese mismo elemento del html.
const divsRemove = document.querySelectorAll('div');
for(const div of divsRemove) {
    const btnRemove = document.createElement('button');
    btnRemove.textContent = 'Eliminar';
    div.appendChild(btnRemove);
    btnRemove.addEventListener('click', () => {
        div.remove();
    });
}


