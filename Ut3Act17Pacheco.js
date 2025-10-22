/**
 * Genera una disposición inicial aleatoria de 8 piezas (una por fila)
 * y muestra el resultado en consola en formato tabular.
 *
 * @returns {Array<Object>} Un arreglo de objetos con la pieza, fila y columna asignadas.
 */
function generarPosicion(){
    //Array de piezas
    const piezas = ["rey", "reina", "torre", "alfil", "caballo", "peon", "torre", "alfil"];

    //Array para almacenar la posicion generada
    const tablero = [];
    
    //Recorremos el array para generar la posicion de las piezas
    piezas.forEach((pieza, i) => {
        const fila = i + 1;
        //Generamos la columna aletoria
        const columna = Math.floor(Math.random() * 8) + 1;

        //Creamos el objeto con toda la informacion de cada pieza y su  posicion
        const posicionPieza ={
            pieza,
            fila,
            columna
        };

        //Lo pasamos al tablero
        tablero.push(posicionPieza)
    });

    //Mostramos el tablero con las diferentes posiciones
    console.log("Tablero de piezas aleatoria");
    console.table(tablero);

    return tablero
}

generarPosicion()