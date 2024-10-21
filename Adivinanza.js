// Linea para poder poner inputs.
const prompt = require('prompt-sync')();

// El usuario debe adivinar el numero que se genero aleatoriamente del 1 al 100.

// Generamos el numero aleatorio y lo guardamos en una variable.
random = Math.floor(Math.random() * 100) + 1;
//console.log(`numero random: ${random}`)

// Para saber si el usuario ingreso el numero y es correcto la logica sera, crear una lista donde el usuario cada que ingrese un numero
// esta lista se llene de los numeros que vaya poniendo pero antes verificando si es igual al que se genero,
// en el caso que el numero del usuario es igual al random es correcto y gana el juego, en caso contrario se agrega a la lista de numeros.

// Lista de numeros.
numeros = []

// Ahora tenemos que preguntarla al usuario para que ingrese el numero y verificar el numero.
// Usamoe el bucle while para que en caso de equivocarse le pregunte denuevo.
while(true){
    // Pedimos que ingrese el numero.
    n = prompt('Ingresa un numero aleatorio: ')

    // Verificamosq que el dato ingresado sea numero en caso contrario le volvemos a preguntar.
    // Convertir la entrada a número y verificar si es válida.
    n = Number(n);

    // Valida que el número no sea NaN y que sea positivo.
    if (!Number.isNaN(n) && n >= 0) {  
        // Si es numero valido entra en verificar si el numero es igual al random, en caso de no serlo se agrega a la lista de numeros.
        if(n === random){
            console.log('Felicidades, adivinaste el número secreto')
            console.log(`numero secreto: ${n}`)
            console.log(`numeros: ${numeros}`)
            console.log(`intentos: ${numeros.length}`)
            break;
        }
    }
    // Agreamos el numero a la lista y repetimos el ciclo.
    numeros.push(n)

    // Mostramos el mensaje que fallo.
    console.log('Ups, el número secreto es incorrecto, vuelve a intentarlo.')
}

