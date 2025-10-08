// 1. Contar alfiles en el tablero con un for
const tablero = ["♖", "♘", "♗", "♕", "♗", "♘", "♖", "♔"];
/***INTRODUCE CÓDIGO AQUÍ***/
let contadorAlfiles = 0;
for (let i = 0; i<tablero.length; i++) {
    if(tablero[i] === "♗") {
        contadorAlfiles++;
    }
}
console.log(`Número de alfiles: ${contadorAlfiles}`);

// 2. Simular avance de un peón con while
/***INTRODUCE CÓDIGO AQUÍ***/ // el peón empieza en segunda fila
let fila = 2;
while(fila<8){
    fila++;
    console.log("El peon se desplaza a la fila: "+fila);
}
console.log("¡El peón ha llegado a la octava fila y puede coronar!");


// 3. Comprobar si el rey está en jaque con do...while
let jaque = true;
do{
    if(jaque){
        console.log("El rey esta en jaque");
        jaque = false;
        //En caso de jaque se cambia a false para detener el bucle
    }else{
        console.log("El rey no esta en jaque");
    }
} while (jaque);


console.log("El rey está en jaque");


// 4. Usar continue para saltar el enroque(investigar sin IA) 
const movimientos = ["e4", "d4", "O-O", "c5"];
for(const movimiento of movimientos){
    if(movimiento === "O-O"){
        continue; //No muestra el movimiento 0-0
    }
    console.log("Moviemiento actual: " + movimiento);
}


// 5. Usar break para detenerse al encontrar la dama(investigar sin IA)
const piezas = ["♙", "♘", "♗", "♕", "♖"];
for(const pieza of piezas){
    if(pieza === "♕"){
        console.log("Se encontro a la dama, finalizo el programa");
        break;
    }
    console.log(pieza);
}