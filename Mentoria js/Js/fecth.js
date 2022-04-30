

// let datos = {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
// }

// fetch(url,{
//     method: 'DELETE',
//     body: JSON.stringify(datos)
// });


// // obtener de un archivo texto
// fetch('../../datos.txt')
//     .then(respuesta => {
//         return respuesta.text();
//     })
//     .then(valor => {
//         console.log(valor)
// })


// // // obtener de un archivo json

//     fetch('../../datos.json')
//     .then(respuesta => {
//         return respuesta.json();
//     })
//     .then(valor => {
//         // console.log(valor);
//         document.querySelector(".datos").innerHTML = valor.name + " " + valor.username + " " + valor.email;
//     })


// obtener de un api

fetch('https://jsonplaceholder.typicode.com/users')
.then(respuesta => {
    return respuesta.json();
})
.then(valor => {
    datos(valor)
})
.catch((err) => {
    console.log("algo salio mal" + err)
})

function datos(valor) {
    let nombres = ""; 

    valor.forEach(user => {
        nombres += `<p>name: ${user.name}</p>
        <p>email: ${user.email}</p>`
    })

    document.querySelector(".datos").innerHTML = nombres;
}
