function validarPosicion(x, y){
    //Comprobamos si las coordenadas son infinitas
    if(!Number.isFinite(x) || !Number.isFinite(y)){
        console.log("Error. Las coordenadas deben ser validad no Nan ni Infinite")
        return false;
    }

    //Comprobamos si las coordenadas estan fuera de rango
    if(x < 1 || x > 8 || y  < 1 || y > 8){
        console.log(`Error. Coordenadas fuera de rango x${x}, y${y}. Limite x = 8, y = 8`);
        return false;
    }

    //Coordenadas correctas
    console.log(`Posicion valida: x${x}, y${y}`);
}

validarPosicion(5, 7);
validarPosicion(Infinity, 5);
validarPosicion(2, 9);
validarPosicion(3, 8);
validarPosicion("c", 5);