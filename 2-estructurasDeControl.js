// estructurasDeControl.js

// Ejercicio 1: Condicionales if-else
// Instrucción: Escribe una función que reciba un número y verifique si es par o impar.
// Imprime "El número es par" o "El número es impar" según corresponda.
function verificarParidad(numero) {
    // Tu código aquí
    if(numero % 2 === 0){
        console.log("El numero es par");
    }else{
        console.log("El numero es impar");
    } 
}

// Ejercicio 2: Condicionales anidados
// Instrucción: Escribe una función que reciba una edad y determine si la persona es:
// "Menor de edad" (menor a 18), "Adulto" (entre 18 y 65), o "Adulto mayor" (mayor a 65).
function clasificarEdad(edad) {
    // Tu código aquí
    if(edad < 18){
        console.log("La persona es menor de edad");
       }else if(edad >= 18 && edad <= 65){
        console.log("La persona es adulta");
       }else{
        console.log("La persona es adulto mayor");
       }
}

// Ejercicio 3: Bucles while
// Instrucción: Crea una función que reciba un número entero positivo y utilice un bucle `while` para imprimir todos los números desde ese número hasta 0.
function cuentaRegresiva(numero) {
    // Tu código aquí
    //pedimos al usuario que ingrese un valor
    if (numero < 0) {
        console.log("Ingrese un numero positivo");
        return;
    }
    while(numero >= 0){
        console.log(numero);
        numero--; //decrementa 
    }
}

// Ejercicio 4: Bucles do-while
// Instrucción: Escribe una función que imprima "Estoy aprendiendo JavaScript" 5 veces utilizando un bucle `do-while`.
function repetirMensaje() {
    // Tu código aquí
    veces = 0;
    do{
      console.log("Estoy aprendiendo JavaScript");
      veces++;
    }while(veces < 5);
}

// Ejercicio 5: Bucle for
// Instrucción: Escribe una función que reciba un número entero positivo y utilice un bucle `for` para imprimir todos los números pares entre 0 y ese número.
function imprimirPares(numero) {
    // Tu código aquí
    if(numero < 0){
        console.log("Ingrese un numero positivo")
        return;
    }
    for(let i = 0; numero >= 0; i + 2){
        console.log("Los numeros son:" + i);
    }
}

// Ejercicio 6: Uso de break
// Instrucción: Escribe una función que recorra los números del 1 al 10, pero detén el bucle cuando el número sea igual a 6.
function detenerEnSeis() {
    // Tu código aquí
    for(let i = 0; numero <= 10; i++){
        if(numero === 6){
         break;
        }
        console.log(i); //Imprime el numero actual
     }
}

// Ejercicio 7: Uso de continue
// Instrucción: Crea una función que recorra los números del 1 al 10, pero que se salte el número 5 usando `continue`.
function saltarCinco() {
    // Tu código aquí
    for (let i = 1; i <= 10; i++) { // Comenzar desde 1
        if (i === 5) { // Verificar si i es igual a 5
            continue; // Saltar el número 5
        }
        console.log(i); // Imprimir el número actual
    }
}

// Ejercicio 8: Switch básico
// Instrucción: Escribe una función que reciba un número del 1 al 7 y devuelva el día de la semana correspondiente (1 es "Lunes", 2 es "Martes", ..., 7 es "Domingo"). Usa la estructura `switch`.
function obtenerDiaSemana(dia) {
    // Tu código aquí
    switch(dia) {
        case 1:
            console.log("Lunes");
            break;
        case 2:
            console.log("Martes");
            break;
        case 3:
            console.log("Miércoles");
            break;
        case 4:
            console.log("Jueves");
            break;
        case 5:
            console.log("Viernes");
            break;
             case 6:
            console.log("Sábado");
            break;
        case 7:
            console.log("Domingo");
            break;
        default:
            console.log("Número no válido. Por favor, ingresa un número del 1 al 7.");
    }
}

// Ejercicio 9: Switch con múltiples casos
// Instrucción: Escribe una función que reciba un carácter y devuelva si es una vocal. Utiliza un `switch` y agrupa los casos para las vocales (a, e, i, o, u).
function esVocal(letra) {
    // Tu código aquí
    switch (letra.toLowerCase()) { // .toLowerCase() Convierte de minúscula a mayúsculas
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            console.log(letra + " es una vocal.");
            break;
        default:
            console.log(letra + " no es una vocal.");
    }
}

// Ejercicio 10: Condicionales complejos con operadores lógicos
// Instrucción: Escribe una función que reciba tres números y determine si todos son positivos, al menos uno es negativo, o todos son negativos. Usa operadores lógicos (`&&`, `||`).
function evaluarNumeros(a, b, c) {
    // Tu código aquí
    if (a > 0 && b > 0 && c > 0) {
        console.log("Todos los números son positivos.");
    } else if (a < 0 || b < 0 || c < 0) {
        if (a < 0 && b < 0 && c < 0) {
            console.log("Todos los números son negativos.");
        } else {
            console.log("Al menos uno de los números es negativo.");
        }
    } else {
        console.log("Hay números cero o mixtos.");
    }
}

// Exportar todas las funciones
export {
    verificarParidad,
    clasificarEdad,
    cuentaRegresiva,
    repetirMensaje,
    imprimirPares,
    detenerEnSeis,
    saltarCinco,
    obtenerDiaSemana,
    esVocal,
    evaluarNumeros,
};
