//Una variable es una especie de “contenedor” al que le ponemos un nombre y que nos sirve para guardar 
//algún valor. Este valor puede ser cualquier tipo de dato que 
//soporte el lenguaje de programación (números, strings, booleans, arrays, objetos).


//formas de inicializar variables

// Nombré todas las variables en inglés porque quise. Realmente puedes nombrarlas en español si quieres (evitando las “ñ” y las tildes para ahorrarte dolores de cabeza). El idioma que elijas no es importante. Lo realmente importante es seguir algunas reglas al momento de nombrarlas:
// .

// Las variables pueden contener letras (a-z), números (0-9), el símbolo de dólar o pesito ($) y pisos o underscores (_)


// Si bien el nombre puede contener números, la misma no puede empezar con ningún número

// No pueden haber espacios en blancos

// No pueden ser ninguna de las palabras reservadas de JavaScript (reserved keywords)


// Los nombres de variable son case sensitive, es decir que se diferencian las mayúsculas de las minúsculas (“esto” no es igual a “Esto” que no es igual a “ESTO”)

// -----------------------------------------------------------------------------


// Definiciones variables:

var //No es bueno usarlo hoy en dia

// Tienen funtion scope
// Puedo reasignarlas
// Puedo redeclararlas

let // mas usada

// Tienen block scope
// Puedo reasignarlas
// No puedo redeclararlas

// const numero = 2;

// Tienen block scope
// No puedo reasignarlas
// No puedo redeclararlas


// NOTA Como ya habrás notado puedes hacer con let, todo lo que haces con var, y además evitas ciertos
// comportamientos inesperados. Así que es mejor trabajar con let, sin embargo interactuarás con
// muchísimo código antiguo cuyas variables están declaradas todas con var, así que es bueno que siempre
// tengas clara cuales son las diferencias.

// -------------------------------Scope------------------------------------

// Vendría siendo el alcance que tiene esa función. Se refiere dónde está disponible esa variable
// para JavaScript. Existen dos tipos de scope: local y global.

// Declarando variable global
let vaso = "lleno"

function beber() {
    // Declarando una variable local
    let valor = "vacío";
    console.log(valor);
}

beber();

//  Resultado:
//  lleno
//  vacío
//  lleno