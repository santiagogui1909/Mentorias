let numero;

function campoObligatorio(numero) {
    numero = Number(prompt("ingresa un numero"));

    if (!isNaN(numero) && numero !== 0) {
        let resultado = definirNumero(numero);
        document.write(resultado);
    } else {
        campoObligatorio(numero);
    }
}

function definirNumero(numero) {
    if (numero % 2 == 0) {
        return `El numero ${numero} es par`;
    } else {
        return `El numero ${numero} es inpar`;
    }
}

campoObligatorio(numero);
