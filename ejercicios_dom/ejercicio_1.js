// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const btnShowMe = document.querySelector(".showme");
console.log(btnShowMe);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const h1Pillado = document.querySelector("#pillado");
console.log(h1Pillado);

// 1.3 Usa querySelector para mostrar por consola todos los p
const parrafos = document.querySelectorAll("p");
console.log(parrafos);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con 
// la clase.pokemon
const classPok = document.querySelectorAll(".pokemon");
console.log(classPok);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con 
// el atributo data-function="testMe".
const dataTestMe = document.querySelectorAll(`[data-function="testMe"]`);
console.log(dataTestMe);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe".
console.log(dataTestMe[2]);