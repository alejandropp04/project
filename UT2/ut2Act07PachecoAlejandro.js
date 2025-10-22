function puedeMoverRey(enJaque, piezaDestino, colorDestino, puedeEnrocar) {
  // El rey puede moverse si:
  // 1 No está en jaque
  // 2 Y (la casilla está vacía o la pieza es enemiga o puede enrocar)
  return !enJaque && (
    piezaDestino === null ||
    colorDestino === "negras" ||
    puedeEnrocar
  );
}

// Ejemplos de pruebas:
console.log(puedeMoverRey(false, null, null, false));
// true: rey no en jaque y destino libre

console.log(puedeMoverRey(true, "♖", "blancas", false));
// false: rey está en jaque → no puede moverse

console.log(puedeMoverRey(false, "♖", "blancas", true));
// true: puede enrocar

console.log(puedeMoverRey(false, "♙", "negras", false));
// true: destino ocupado por pieza enemiga, puede capturar
