/**
 * funcion pedir pieza, pide al usuario la pieda y la casilla de destino.
 * Sin la casilla o la pieza estan vacias saltara una alerta conforme el usuario
 * tiene que introducir los dos campos
 *
 * Si la casilla incluye la letra "C" muetras un mensaje de "Movimiento a flanco de dama
 */
 function pedirPieza(){
    const pieza = prompt("Introduce el nombre de la pieza: ");
    const casilla = prompt("Introduce la casilla de destino");

    if(!pieza || !casilla){
        alert("Debe introducir ambos valores");
        return;
    }

    let mensaje = `El ${pieza} se ha movido a ${casilla}`;

    if(casilla.toUpperCase().includes("C")){
        alert("Movimiento al flanco de dama");
    }
    alert(mensaje.toUpperCase());
}
pedirPieza();