
function calcularCombustible(){
    let kilometrosIngresados = document.getElementById("kilometros-input");

    let combustibleNecesario = Number(kilometrosIngresados.value) / 8.8;

    document.getElementById("respuesta-combustible").textContent = "Necesitaras aproximadamente " + combustibleNecesario.toFixed(1) + " litros";

}


function calcularKilometros(){
    let litrosIngresados = document.getElementById("litros-input");

    let kilometrosARecorrer = Number(litrosIngresados.value) * 8.8;

    document.getElementById("respuesta-kilometros").textContent = "Recorreras aproximadamente " + kilometrosARecorrer.toFixed(1) + " kilometros";
}
