// Solo contiene funciones de validación y usa opt como variable para pasar texto personalizado

const validaEntradaNumero = (opt) => {
    num = 0;
    while (isNaN(num) || num <= 0) {  //bucle en caso de que no sea un valor numero positivo o cero
        num = Number(prompt(opt));
    }
    return num;
}

const validaTexto = (opt) => {
    let texto = "";
    while (texto === "" || texto.trim()==="") {
       texto = prompt(opt).toLowerCase();
   };
    return texto;
}

const validaRespuesta = (opt) => {
    respuesta ="";
    while (respuesta !== "s" && respuesta !== "n"){
        respuesta = validaTexto(opt);
        
        if (respuesta !== "s" && respuesta !== "n") {
            alert(opt);
        } 
    }
    return respuesta;
}