const jaque = true;
//const jaque = false;
//const mate = true;
const mate = false;
const turno = "blancas";
//const turno = "negras";

console.log(turno === "blancas" ? "Turno blancas" : "Turno negras");

if(jaque){{
    if(mate){
        console.log("¡Jaque mate!");
        console.log(turno === "blancas" ? "¡Ganaros las blancas!" : "¡Ganaron las negras!");
    } else {
        console.log("El rey está en Jaque, aun queda partida");
    }
}}
else{
    console.log("La partida sigue normal");
}

console.log(turno === "blancas" ? "Turno blancas" : "Turno negras");

