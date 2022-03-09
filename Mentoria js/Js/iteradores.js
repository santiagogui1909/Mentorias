
let array = ["santiago", "camilo", "andrea" , "pedro" , "carlitos"];

const nombres = [{
    id: 1,
    nombre: "santiago",
    edad: 12,   
},{
    nombre: "camilo",
    edad: 19
}  
]
                            
// // ciclo for
for (let i = 0; i <= array.length; i++) {

    if(array[i] == "camilo") {
        console.log("hola encontre a camilo");
        break;
    }
    console.log(array[i]);
}

// // for in y el for on
for (let valor of array){
    console.log(valor);
}

// console.log("--------------")
for (let valor2 in array){

    if (valor2 == 3) {
        console.log(array[valor2]);
    }
}

// //while 
let i = 0;
while(i < 15) {
    console.log("te saludo " + i);
    i++;
}

//do while 
do {
    console.log("te saludo " + i);
    i++;
} while (i < 10);

// forEach
array.forEach((nombre, index) => {
    if (nombre == "pedro") {
        console.log("hola soy pedro");
    }
});

    



