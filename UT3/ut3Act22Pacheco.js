/**
 * Crea un contador simple de tiempo de turno.
 * Usa Date.now() para medir la duración del turno en segundos.
 */
function contadorDeTurno() {
    // Registrar el inicio del turno
    const inicio = Date.now();
    console.log("Turno iniciado...");

    // Función interna para finalizar el turno
    return function finalizarTurno() {
        // Registrar el final del turno
        const fin = Date.now();

        // Calcular la diferencia en milisegundos y convertir a segundos
        const duracion = (fin - inicio) / 1000;

        // Mostrar resultado
        console.log(`Tiempo del turno: ${duracion.toFixed(2)} segundos`);

        // Verificar si se excedió el límite de 60 segundos
        if (duracion > 60) {
            console.log("Tiempo excedido");
        }
    };
}

// Iniciar el turno
const terminar = contadorDeTurno();

// Simular que pasa un tiempo antes de terminar el turno
setTimeout(() => {
    terminar(); // Finalizar el turno y mostrar resultado
}, 4500); // Simula 4.5 segundos de duración
