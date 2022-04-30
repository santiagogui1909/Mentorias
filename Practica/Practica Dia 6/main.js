let contenedor = document.querySelector(".contenedorDatos");
let buscador = document.querySelector("#buscador");
let btnBuscar = document.querySelector("#btn");
let alerta = document.querySelector(".alerta");
let alertResultados = document.querySelector(".alertaResultados");
let nombreBusqueda = "";

setTimeout(() => {
    obtenerDatos()
},0 | (Math.random() * 1000));

const obtenerDatos = () => {
    fetch("https://api.thecatapi.com/v1/breeds")
    .then(respuesta => respuesta.json())
    .then(datos => mostrarDatos(datos))
    .catch(err => {
        console.error("ERROR: " + err.message)
    });
}

const mostrarDatos = (datos) => {
    let gato = "";
    
    datos.forEach(dato => { 
        const {name,origin,description} = dato;

        gato += `<section class="tarjeta">
                    <h2 class="tituloTarjeta">${name}</h2>
                    <p class="origen">origen: <span>${origin}</span></p>
                    <p class="descripcion">${description}</p>
                </section>`
    })
    contenedor.innerHTML = gato;
}

buscador.addEventListener("keyup", function(e){
    nombreBusqueda = e.target.value;
})


const buscar = () => {

    if (nombreBusqueda === "") {
        alerta.style.display = "block";
        obtenerDatos();
    } 

    setTimeout(() => {
        alerta.style.display = "none";
    },2000);

    fetch(`https://api.thecatapi.com/v1/breeds/search?q=${nombreBusqueda}`)
    .then(res => res.json())
    .then(raza => {
        let gato = "";

        if (raza.length === 0) {
            alertResultados.style.display = "block";
            alertResultados.innerHTML = `no se encontraron resultados para la busqueda de <span>"${nombreBusqueda}"</span>`;
        } else {
            alertResultados.style.display = "none";

            raza.forEach(gatoBusqueda => {
                gato += `<section class="tarjeta">
                <h2 class="tituloTarjeta">${gatoBusqueda.name}</h2>
                <p class="origen">origen: ${gatoBusqueda.origin}</p>
                <p class="descripcion">${gatoBusqueda.description}</p>
                </section>`
            })
            nombreBusqueda = "";
        }
        contenedor.innerHTML = gato;
    })
    .catch(err => console.log(err))

    buscador.value = "";
}

btnBuscar.addEventListener("click", buscar);