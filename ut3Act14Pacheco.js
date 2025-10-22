const piezas ={
    "peon": 1,
    "caballo": 3,
    "alfil": 3,
    "torre": 5,
    "dama": 9
};
let puntiacion = 0;

//Recorremos el array para sumar el valor de todas las piezas
for(const pieza in piezas){
    puntiacion += piezas[pieza];
}

//Mostramos el total de piezas
console.log(`Puntuacion total: ${puntiacion.toFixed(1)}`);