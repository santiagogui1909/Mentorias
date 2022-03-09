// crear un programa que me permita ingresar un usario y mostrar por pantalla los usuarios  
const mostrar = document.querySelector(".cantenedorUsuarios");

let array = [];
    
    const agregar = () => {
        let nombre = prompt("Ingrese su nombre");
        array.push(nombre);

        if (nombre !== 0) {
            mostrarUsuarios();
        } 
    }

    const mostrarUsuarios = () => {
        let usuarios = "";
        array.forEach((valor) => {
            usuarios += `<p>${valor}</p>`;
        });
        mostrar.innerHTML = usuarios;
    }

document.getElementById("agregar").addEventListener("click", agregar);







