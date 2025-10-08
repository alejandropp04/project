// --- Configuración inicial ---
  // turno puede ser "blancas" o "negras"
  // enJaque ¿El rey está en jaque?
  // sinMovimientos ¿El rey no tiene movimientos legales?
const turno = "blancas";
const enJaque = true;
const sinMovimientos = false;
/**
 * Comprueba el estado del rey, y lo muestra por consola
 */
function comprobarEstadoRey(enJaque, sinMovimientos) {
    if(enJaque && sinMovimientos){
        console.log("El rey esta en Jaque y sin movimientos");
    }else if(enJaque){
        console.log("El rey esta en Jaque");
    } else{
        console.log("La partida avanza normal");
    }
}

/**
 * Muestra de quién es el turno
 */
function mostrarTurno(turno) {
    console.log("Es el turno de las " + turno);
}

// --- Ejecución ---
comprobarEstadoRey(enJaque, sinMovimientos);
mostrarTurno(turno);
