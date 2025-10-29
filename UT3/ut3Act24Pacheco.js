let nombreJugador = prompt("Introduzca su nombre");
if (nombreJugador === null || nombreJugador.trim() === "") {
    alert("Nombre no introducido");
} else{
    //Guardamos el nombre del usuario
    localStorage.setItem("usuario", JSON.stringify(nombreJugador));

    //Comprobamos si inicia o no la partida
    const empezar = confirm("¿Quiere comenzar la partida?");
    if(empezar){
        alert(`Comienza la partida, ${nombreJugador} con las blancas`);
    }else{
        alert(`El jugador, ${nombreJugador} ha pospuesto la partida`);
    }

    //Pedimos la dificultad
    const dificultad = prompt("Elige el nivel: facil, medio o dificil");

    //Guardamos la dificultad
    localStorage.setItem("nivel", JSON.stringify(dificultad));
}

//Mostramos el nombre y la dificultad
const usuario = JSON.parse(localStorage.getItem("usuario"));
const nivel = JSON.parse(localStorage.getItem("nivel"));

console.log(`Nombre: ${usuario} \n Nivel: ${nivel}`);