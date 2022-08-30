/* EJEMPLO 1 */
let numero = parseInt(prompt("Ingrese un número: "));
console.log(numero);
if (isNaN(numero)) {
    console.log("Esto no es un número");
} else {
    let sumatoria = 0;

    while (sumatoria <= 100) {
        sumatoria = (numero + sumatoria + 1)
        console.log(sumatoria);
    }
}

/* EJEMPLO 2 */
let input;
let texto = '';
while (input != "ESC") {
    input = prompt("Ingrese su texto: ");
    if (input == "ESC") {
        break;
    }
    texto = texto + ' ' + input;
    console.log(texto);
}


/* EJEMPLO 3*/
let textoDos = "Hola";
let numeroDos = parseFloat(prompt("Ingrese un número: "));
console.log(numeroDos);
if(isNaN(numeroDos)){
    console.log("Esto no es un número");
} else {

    for(let i=0; i < numeroDos; i++){
        console.log(textoDos + i);
    }
}