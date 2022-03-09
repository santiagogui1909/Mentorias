
// Selectores de clase

// // Todos tus selectores inician con document...
// const header = document.getElementsByClassName('header'); // Es muy importante las mayusculas y minusculas...
// console.log(header);

// let resultado = Array.prototype.filter.call(header, function(header){
//     return header.nodeName === 'h2';
// });

// const hero = document.getElementsByClassName('contenido-hero');
// console.log(hero);


// // Como las classes se pueden repetir, obviamente todas las coincidencias de classes se asignaran a contenedores.
// const contenedores = document.getElementsByClassName('contenido');
// console.log(contenedores);


// Selectores de id

// const formulario = document.getElementById('add');

// formulario.addEventListener("click" , function(e) {
//     console.log("click");
// })

// // Si no exist eestará vacio
// const noExiste = document.getElementById('no-existe');
// console.log(noExiste);

// Añadir un ID 2 veces, seleccionara el primero que encuentre.



// queryselector

//  querySelector va a retornar máximo 1 elemento, si hay múltiples coincidencias solo va a retornar el primero...

// const contenido = document.querySelector('.contenido'); // QuerySelctor utiliza una sintaxis como de selector de CSS, por lo tanto si deseas seleccionar una clase, debe tener un punto al inicio...
// contenido.innerHTML = "hola"
// // nota como a pesar de tener múltiples contenido, solo selecciona 1

// console.log(contenido);

// al ser una sintaaxis tipo CSS puedes utilizar selectores más especificos...

// const info = document.querySelector('.contenido');
// info.style.color = 'red';

// console.log(info);


// const segundoCard = document.querySelector('.contenido-hero .contenido:nth-child(5)');
// console.log(segundoCard);

// Ahora estas son classes, veamos como seleccionar un ID
// const btn = document.querySelector('#add'); // En CSS seleccionas los ID con un signo de numeral..
// console.log(btn);
// También los ID pueden tener selectores especificos como el de arriba, pero recuerda un ID es único asi que no tendría mucho sentido no?

// // Si un selector no existe, 
// const noExiste = document.querySelector('#no-existe');
// console.log(noExiste);

// // Recuerda que también en CSS puedes seleccionar etiquetas asi que si quieres seleccionar la navegación podrías tener algo asi:
// const h2 = document.querySelector('h2');
// console.log(h2)

// // // querySelectorAll

// const contenido = document.querySelectorAll('.contenido'); 
// // console.log(contenido);

//     contenido.forEach(eve => {

//         eve.style.color = 'blue';
//         eve.addEventListener('click', function(e) {
//             console.log("hola")
//         })
//     })
