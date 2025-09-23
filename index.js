function saludar(nombre) {
  console.log("Hola " + nombre);
}

let nombres = ["Ana", "Luis", "Maria"];

for (let i = 0; i < nombres.length; i++) {
  saludar(nombres[i]);
}
