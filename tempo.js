
let segundos = 0;
let intervalo = null;

function actualizarReloj() {
    let minutos = Math.floor(segundos / 60);
    let seg = segundos % 60;

    document.getElementById("reloj").textContent =
        String(minutos).padStart(2, "0") + ":" +
        String(seg).padStart(2, "0");
}

function iniciar() {
    if (intervalo !== null) return;

    intervalo = setInterval(() => {
        segundos++;
        actualizarReloj();
    }, 1000);
}

function pausar() {
    clearInterval(intervalo);
    intervalo = null;
}

function reiniciar() {
    pausar();
    segundos = 0;
    actualizarReloj();
}