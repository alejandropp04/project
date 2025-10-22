const dama = 9;
const torre = 5;
const caballo = 3;
const peon = 1;

let puntosBlancas = 0;
let puntosNegras = 0;

//Contador
let jugada = 0;

function ganador(){
    if(puntosBlancas > puntosNegras){
        console.log("Blancas van ganando con: " + puntosBlancas + " puntos");
    } else{
        console.log("Negras va ganando con: " + puntosNegras + " puntos");
    }
    jugada++;
}

console.log(turnoActual(jugada));
console.log("El equipo negro captura el caballo");
puntosNegras += caballo;
ganador();

console.log(turnoActual(jugada));
console.log("El equipo blanco captura el peon");
puntosBlancas += peon;
ganador()

console.log(turnoActual(jugada));
console.log("El equipo negro captura un peon y una torre");
puntosNegras += peon;
puntosNegras += torre;
ganador()

console.log(turnoActual(jugada));
console.log("El equipo blanco captura el caballo y la dama");
puntosBlancas += caballo;
puntosBlancas += dama;
ganador();

//Segunda parte del ejercicio
function turnoActual(jugada){
    return jugada % 2 === 0 ? "negras" : "blancas"
}

//Funcion capturar pieza
const valoresPiezas = {
    dama: 9,
    torre: 5,
    caballo: 3,
    peon: 1
};

function capturar(pieza, color){
   let valor = valoresPiezas[pieza];

   if(!valor){
       console.log("La pieza introducida no es valida");
   }

   if(color === "negras"){
       puntosBlancas += valor;
       if(puntosBlancas === 10){
           console.log("Enhorabuena has llegado a 10 puntos");
       }
   } else if(color === "blancas"){
       puntosNegras += valor;
       if(puntosNegras === 10){
           console.log("Enhorabuena has llegado a 10 puntos");
       }
   } else{
       console.log("Color no valido");
   }
}

//Reiniciamos los puntos para ver si funciona la funcion
puntosBlancas = 0;
puntosNegras = 0;
capturar("caballo", "blancas");
capturar("dama", "negras");
capturar("torre", "blancas");
capturar("peon", "negras");

console.log(puntosNegras, puntosBlancas);
