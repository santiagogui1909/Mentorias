const datos = [{
    titulo: "iphone 10",
    img: "https://cdn.pixabay.com/photo/2020/11/18/13/51/iphone-12-5755365_960_720.jpg",
    precio: 400
},
{
    titulo: "samgsun 20px",
    img: "https://cdn.pixabay.com/photo/2017/05/25/21/13/phone-2344373_960_720.jpg",
    precio: 200
}, {
    titulo: "reloj casio",
    img: "https://cdn.pixabay.com/photo/2020/11/18/13/51/iphone-12-5755365_960_720.jpg",
    precio: 350
}, {
    titulo: "iphone 6",
    img: "https://cdn.pixabay.com/photo/2017/05/25/21/13/phone-2344373_960_720.jpg",
    precio: 200
}, {
    titulo: "portatil asus",
    img: "https://cdn.pixabay.com/photo/2020/11/18/13/51/iphone-12-5755365_960_720.jpg",
    precio: 1000
}, {
    titulo: "mouse logi",
    img: "https://cdn.pixabay.com/photo/2017/05/25/21/13/phone-2344373_960_720.jpg",
    precio: 400
}, {
    titulo: "bolso toto",
    img: "https://cdn.pixabay.com/photo/2017/05/25/21/13/phone-2344373_960_720.jpg",
    precio: 100
},
{
    titulo: "bici bmx",
    img: "https://cdn.pixabay.com/photo/2017/05/25/21/13/phone-2344373_960_720.jpg",
    precio: 800
}
];

const contenedor = document.getElementById("contenedor");

function renderizarProd() {

    datos.forEach((prod, index) => {
        let cuerpoTarjeta = document.createElement("section");
        cuerpoTarjeta.classList.add("tarjeta");
        cuerpoTarjeta.setAttribute("id" , index);

        let titulo = document.createElement("h3");
        titulo.classList.add("tituloTarjeta");
        titulo.textContent = prod.titulo;

        let imgProducto = document.createElement("img");
        imgProducto.classList.add("imgProd");
        imgProducto.src = prod.img;
        imgProducto.setAttribute("src" , prod.img);

        let precio = document.createElement("p");
        precio.classList.add("precio");
        precio.textContent = `precio: ${prod.precio}$`;

        let boton = document.createElement("button");
        boton.classList.add("btnPagar");
        boton.textContent = "pagar";

        cuerpoTarjeta.appendChild(titulo);
        cuerpoTarjeta.appendChild(imgProducto);
        cuerpoTarjeta.appendChild(precio);
        cuerpoTarjeta.appendChild(boton);

        contenedor.appendChild(cuerpoTarjeta);
    })
}

renderizarProd();

