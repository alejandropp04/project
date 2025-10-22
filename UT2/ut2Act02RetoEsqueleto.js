// Valores de las piezas (en puntos)
const VALORES = {
  "♕": 9, // dama
  "♖": 5, // torre
  "♘": 3, // caballo
  "♙": 1// peón
};

// Puntos y jugadas
let puntosBlancas = 0;
let puntosNegras = 0;
let jugadas = 0;



/**
 * Captura de pieza
 * @param {string} pieza - símbolo de la pieza (♕, ♖, ♘, ♙)
 * @param {string} color - "blancas" o "negras" (quién captura)
 */
function capturar(pieza, color) {
  // Aumentamos jugada
  jugadas++;

  //Sumamos los puntos dependiendo de quien capture
  const valor = VALORES[pieza] || 0;
  if(color === "blancas"){
    puntosBlancas += valor;
  } else if(color === "negras"){
    puntosNegras += valor;
  }

  console.log(`${color} capturan ${pieza}`);
  mostrarEstado();
}

/**
 * Muestra el estado de la partida
 */
function mostrarEstado() {
  // Mostrar puntos actuales
  console.log(`Blancas: ${puntosBlancas} | Negras: ${puntosNegras}`);

  // Mostrar quién va ganando
  if(puntosNegras > puntosBlancas){
    console.log("Van ganando las negras con " + puntosNegras);
  } else if(puntosBlancas > puntosBlancas){
    console.log("Van ganando las blancas con " + puntosBlancas);
  } else{
      console.log("Empate entre blancas y negras");
  }

  // Comprobar si alguien llega exactamente a 10 puntos
  if(puntosBlancas === 10 || puntosNegras === 10) {
    console.log("Enhorabuena has llegado a 10 puntos exactos");
  }
  

  // Turno según jugadas (par = blancas, impar = negras)
  const turno = jugadas % 2 === 0 ? "Blancas" : "Negras";
  console.log(`Turno actual: ${turno}`);
  
}

// Ejemplo de partida
capturar("♕", "blancas"); // +5
capturar("♘", "negras");  // +3
capturar("♙", "blancas"); // +1
capturar("♕", "negras");  // +9
