/**
 * Creacion de dos fechas, inicio y fin de la partida
 * @type {Date}
 */
const inicio = new Date(2025, 10, 22, 21, 20);
const fin = new Date(2025, 10, 22, 22 ,35);

/**
 * Duracion de la partida
 * @type {number}
 */
const duracion = fin - inicio;

// Minutos de la partida
const minutos =  duracion / 60000;

//Imprime por consola la duracion de la partida en minutos
console.log(`La partida ha durado ${minutos} minutos`);