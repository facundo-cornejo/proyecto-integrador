document.getElementById("cantidadDias").innerHTML = restarFechas();

function restarFechas(){
    let fechaUltimaModificacion = new Date('2023/02/01');
    let fechaActual = new Date()
    let resta = fechaActual.getTime() - fechaUltimaModificacion.getTime()
    let resultado 
    resultado = Math.round(resta/ (1000*60*60*24)) 
        return resultado
}
