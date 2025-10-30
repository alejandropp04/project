//Recuperamos el nombre de usuario si existe
let perfil = JSON.parse(localStorage.getItem("perfilJugador"));

if(!perfil){
    //Si no existe, pedimos el nombre al usuario
    let nombreJugador = prompt("Introduzca su nombre:");
    while(!nombreJugador || nombreJugador.trim() === ""){
        nombreJugador = prompt("Nombre no introducido. Por favor, ingrese un nombre válido.");
    }

    //Elegir color de piezas
    let colorPiezas = prompt("Elija el color de sus piezas: blancas o negras:").toLowerCase();

    //Pedimos el avatar
    let avatar = prompt("Elija su avatar: maestro, aprendiz").toLowerCase();

    //Creamos el perfil
    perfil = {
        nombreJugador,
        colorPiezas,
        partidas: 0,
        avatar,
        estadisticas: {
            partidasGanadas: 0,
            partidasPerdidas: 0,
            partidasEmpatadas: 0
        }
    };

    //Guardamos el perfil en localStorage
    localStorage.setItem("perfilJugador", JSON.stringify(perfil));

    console.log(`Bienvenido, ${perfil.nombreJugador}!`);
} else{
    //Si el perfil ya existe, actualizar la fecha y mostrar mensaje de bienvenida
    perfil.ultimoInicio = new Date().toLocaleString();
    localStorage.setItem("perfilJugador", JSON.stringify(perfil));

    console.log(`Bienvenido de nuevo, ${perfil.nombreJugador}!`);
    console.log(`Ultimo inicio de sesión: ${perfil.ultimoInicio}`);
}

//Contador de partidas jugadas
function registrarPartida(resultado = "ganada"){
    perfil.partidas++;
    if(resultado === "ganada"){
        perfil.estadisticas.partidasGanadas++;
    } else if(resultado === "perdida"){
        perfil.estadisticas.partidasPerdidas++;
    } else if(resultado === "empatada"){
        perfil.estadisticas.partidasEmpatadas++;
    }

    localStorage.setItem("perfilJugador", JSON.stringify(perfil));
    console.log(`Partidas jugadas: ${perfil.partidas}`);
    console.log(`Estadisticas: `, perfil.estadisticas);
}

//Turno actual
let turno = sessionStorage.getItem("turno") || "blancas";

function cambiarTurno(){
    turno = (turno === "blancas") ? "negras" : "blancas";
    sessionStorage.setItem("turno", turno);
    console.log(`Turno actual: ${turno}`);
}

//Mostrar perfil
function mostrarPerfil() {
    console.table({
        Nombre: perfil.nombreJugador,
        Color: perfil.colorPiezas,
        Partidas: perfil.partidas,
        "Ultimo inicio": perfil.ultimoInicio,
        "Partidas ganadas": perfil.estadisticas.partidasGanadas,
        "Partidas perdidas": perfil.estadisticas.partidasPerdidas,
        "Partidas empatadas": perfil.estadisticas.partidasEmpatadas,
        "Avatar": perfil.avatar
    });
}

//Reiniciar el perfil
function reiniciarPerfil(){
    localStorage.clear();
    sessionStorage.clear();
    console.log("Perfil reiniciado. Recargue la página para comenzar de nuevo.");
}

registrarPartida("ganada");
cambiarTurno();
mostrarPerfil();
// reiniciarPerfil();
