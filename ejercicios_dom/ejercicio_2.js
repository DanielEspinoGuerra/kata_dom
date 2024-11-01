// 1.1 Inserta dinamicamente en un html un div vacio con javascript.
const nuevoDiv = document.createElement("div");
document.body.appendChild(nuevoDiv);

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const nuevoDiv2 = document.createElement("div");
const nuevoP = document.createElement('p');
const textoParrafo = document.createTextNode("párrafo 1.2");
nuevoP.appendChild(textoParrafo);
nuevoDiv2.appendChild(nuevoP);
document.body.appendChild(nuevoDiv2);

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
// 	loop con javascript.
const nuevoDiv3 = document.createElement("div");
let nuevoP2;
let textoParrafo2;
for(let i = 0; i < 6; i++) {
    nuevoP2 = document.createElement('p');
    textoParrafo2 = document.createTextNode("párrafo 1.3");
    nuevoP2.appendChild(textoParrafo2);
    nuevoDiv3.appendChild(nuevoP2);
}
document.body.appendChild(nuevoDiv3);


// 1.4 Inserta dinamicamente con javascript en un html una p con el 
// 	texto 'Soy dinámico!'.
const nuevoP3 = document.createElement('p');
const textoParrafo3 = document.createTextNode("Soy dinámico");
nuevoP3.appendChild(textoParrafo3);
document.body.appendChild(nuevoP3);

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2Insert = document.querySelector(".fn-insert-here");
const textoH2 = document.createTextNode("Wubba Lubba dub dub");
h2Insert.appendChild(textoH2);

// 1.6 Basandote en el siguiente array crea una lista ul > li con 
// los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const lista = document.createElement('ul');
let nuevoLi;
let textoLi;
for(const app of apps) {
    nuevoLi = document.createElement('li');
    textoLi = document.createTextNode(app);
    nuevoLi.appendChild(textoLi);
    lista.appendChild(nuevoLi);
}
document.body.appendChild(lista);

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const listRem = document.querySelectorAll(".fn-remove-me");
for(const rem of listRem) {
    rem.remove();
}

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
const nuevoP4 = document.createElement('p');
const textoMedio = document.createTextNode("Voy en medio!");
nuevoP4.appendChild(textoMedio);
document.body.insertBefore(nuevoP4, nuevoDiv3);



// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
// 	.fn-insert-here
const claseInsert = document.querySelectorAll("div.fn-insert-here");
for(const clase of claseInsert) {
    const nuevoP5 = document.createElement('p');
    const textoDentro = document.createTextNode("Voy dentro!");
    nuevoP5.appendChild(textoDentro);
    clase.appendChild(nuevoP5); 
}