// // onclick -- ondblclick
// let btnAlert = document.getElementById("btnClick");
// // formas de crear Eventos ---- esto puede aplicarse con cualquiera de los tipos de eventos

// // 1
// btnAlert.addEventListener("click", function() {
//     console.log("hola");
// });

// // 2
// const saludar = () => {
//     console.log("hola mundo");
// }
// btnAlert.addEventListener("click", saludar);

// // 3
// document.getElementById("btnClick").addEventListener("click", function(e) {
//     console.log("hola mundo");
// });

// // onchange
// let inputSelect = document.getElementById("select");

// inputSelect.addEventListener("change", function(e) {
//     console.log(e.target.value);
// });

// // eventos del teclado - keypress , keydown , keyup
// let inputSelect = document.getElementById("input");

// inputSelect.addEventListener("keypress", function(e) {
//     console.log(e.target.value);
// });

// inputSelect.addEventListener("keyup", function(e) {
//     console.log(e.target.value);
// });

// // onload -- al cargar una página
// addEventListener("load", function(){
//     console.log("se cargo la pagina")
// })

// // onmousedown - eventos de mouse -- onmouseout , onmouseover , onmousemove
// let parrafo = document.getElementById("parrafo");

// parrafo.addEventListener("mouseout", function(e) {
//     console.log("sobre el elemento")
// });

