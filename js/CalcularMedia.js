// Se define la función que realizará el cálculo
function CalcularMedia() {
    // Se declaran las variables que intervienen en el script
    var prog, bbdd, eedd, llmm, ing, calculo, calculosining, media, mediasining;

    // Se recogen los datos introducidos por el usuario
    prog = document.getElementById("programacion").value;
    bbdd = document.getElementById("bbdd").value;
    eedd = document.getElementById("eedd").value;
    llmm = document.getElementById("llmm").value;
    ing = document.getElementById("ing").value;

    calculo = parseFloat(prog) + parseFloat(bbdd) + parseFloat(eedd) + parseFloat(llmm) + parseFloat(ing);
    calculosining = parseFloat(prog) + parseFloat(bbdd) + parseFloat(eedd) + parseFloat(llmm);

    // Se calcula la media de los valores introducidos
    media = calculo / 5;
    mediasining = calculosining / 4;

    // Se envía el resultado a la etiqueta correspondiente
    document.getElementById("media").value = media;
    document.getElementById("mediasining").value = mediasining;

    // Se muestran los datos por consola
    console.log("- Programación: " + parseFloat(prog));
    console.log("- Bases de Datos: " + parseFloat(bbdd));
    console.log("- Entornos de Desarrollo: " + parseFloat(eedd));
    console.log("- Lenguajes de Marcas: " + parseFloat(llmm));
    console.log("- Inglés: " + parseFloat(ing));

    // Se muestra el resultado del cálculo por consola
    console.log("******************************");
    console.log("Suma total de notas: " + calculo);
    console.log("La media del curso es: " + media);
    console.log("La media del curso sin Inglés es: " + mediasining);
  
    if (prog < 5) {
        var prog_result = "-Programación: " + "\t\t SUSPENDIDA\n";
        console.log(prog_result);        
    }else{
        prog_result = "-Programación: " + "\t\t APROBADA\n";
        console.log(prog_result);
    }
    if (bbdd < 5) {
        var bbdd_result = "-Bases de Datos: " + "\t SUSPENDIDA\n";
        console.log(bbdd_result);        
    }else{
        bbdd_result = "-Bases de Datos: " + "\t APROBADA\n";
        console.log(bbdd_result);
    }
    if (eedd < 5) {
        var eedd_result = "-Entornos de Desarrollo: " + "SUSPENDIDA\n";
        console.log(eedd_result);        
    }else{
        eedd_result = "-Entornos de Desarrollo: " + "APROBADA\n";
        console.log(eedd_result);
    }
    if (llmm < 5) {
        var llmm_result = "-Lenguajes de Marcas: " + "\t SUSPENDIDA\n";
        console.log(llmm_result);        
    }else{
        llmm_result = "-Lenguajes de Marcas: " + "\t APROBADA\n";
        console.log(llmm_result);
    }
    if (ing < 5) {
        var ing_result = "-Inglés: " + "\t\t SUSPENDIDA\n";
        console.log(ing_result);        
    }else{
        ing_result = "-Inglés: " + "\t\t APROBADA\n";
        console.log(ing_result);
    }

    if (prog < 5 || bbdd < 5 || eedd < 5 || llmm < 5 || ing < 5){
        var verano = "\n  Este verano hay que esforzarse más.";
        console.log(verano);
    }else{
        verano = "\n  ¡¡¡Este verano de fiestaaa!!!";
        console.log(verano);
    }

    document.getElementById("textarea").value = prog_result + bbdd_result + eedd_result + llmm_result + ing_result + verano;

    return false;
}
