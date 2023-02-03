document.getElementById("cantidadDias").innerHTML = restarFechas();

function restarFechas(){
    let fechaUltimaModificacion = new Date('2023/02/01');
    let fechaActual = new Date()
    let resta = fechaActual.getTime() - fechaUltimaModificacion.getTime()
    let resultado 
    resultado = Math.round(resta/ (1000*60*60*24)) 
        return resultado
}

function cambiarColorBody(){
    let color = document.getElementById("colorInputBody").value;
    document.body.style.backgroundColor = color;
};

function cambiarColorMain(){
    let color = document.getElementById("colorInputMain").value;
    document.getElementById("seccionPrincipal").style.backgroundColor = color;
};

function cambiarColorAside(){
    let color = document.getElementById("colorInputAside").value;
    document.getElementById("columnaLateral").style.backgroundColor = color;
};

function cambiarColorEncabezado(){
    let color = document.getElementById("colorInputEncabezado").value;
    document.getElementById("encabezado").style.backgroundColor = color;
};

function cambiarColorPie(){
    let color = document.getElementById("colorInputPie").value;
    document.getElementById("pie").style.backgroundColor = color;
};

/* Restablecen el color */
function restableceColorBody(){
    let color = "#dfdfdf";
    document.body.style.backgroundColor = color;
    document.getElementById("colorInputBody").value = color;
};

function restableceColorMain(){
    let color = "#FFFFFF";
    document.getElementById("seccionPrincipal").style.backgroundColor = color;
    document.getElementById("colorInputMain").value = color;
};

function restableceColorEncabezado(){
    let color = "#72bf44";
    document.getElementById("encabezado").style.backgroundColor = color;
    document.getElementById("colorInputEncabezado").value = color;
};

function restableceColorPie(){
    let color = "#72bf44";
    document.getElementById("pie").style.backgroundColor = color;
    document.getElementById("colorInputPie").value = color;
};

function restableceColorAside(){
    let color = "#d4d4d5";
    document.getElementById("columnaLateral").style.backgroundColor = color;
    document.getElementById("colorInputAside").value = color;
};