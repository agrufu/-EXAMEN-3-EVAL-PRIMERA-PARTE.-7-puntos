// Se define la función que realizará el cálculo
function CalcularMedia() {
    // Se declaran las variables que intervienen en el script
    var prog, bbdd, eedd, llmm, calculo, media;

    // Se recogen los datos introducidos por el usuario
    prog = document.getElementById("programacion").value;
    bbdd = document.getElementById("bbdd").value;
    eedd = document.getElementById("eedd").value;
    llmm = document.getElementById("llmm").value;

    calculo = parseFloat(prog) + parseFloat(bbdd) + parseFloat(eedd) + parseFloat(llmm);

    // Se calcula la media de los valores introducidos
    media = calculo / 4;

    // Se envía el resultado a la etiqueta correspondiente
    document.getElementById("media").value = media;

    // Se muestran los datos por consola
    console.log(parseFloat(prog));
    console.log(parseFloat(bbdd));
    console.log(parseFloat(eedd));
    console.log(parseFloat(llmm));

    // Se muesta el resultado del cálculo por consola
    console.log(calculo);
    console.log(media);
    return false;
}