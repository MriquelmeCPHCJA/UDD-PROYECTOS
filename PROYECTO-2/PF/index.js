//alert('Proyecto 2 PF')

// Uso de Validadores Externos:
// Function validaEntradaNumero(opt)
// Function validaTexto(opt)
// Function validaRespuesta(opt)
// ** opt es un texto opcional que puede recibir para mostrar un mensaje personalizado


let encuestas = [];


const nuevaEncuesta = () => {
    
    let respPrincipal = "";
    do {
        let opciones = [];
        
        let pregunta = validaTexto("Ingrese la Pregunta de su Encuesta");
        
        do {
            resp = "";
            opciones.push(validaTexto(`Ingrese nueva opción de respuesta para la Encuesta \n "${pregunta.toUpperCase()}"`));
            resp = validaRespuesta("Quieres ingresar otra Opcion de respuesta para la Encuesta");
        } while (resp === "s" || opciones.length < 2);

        let nuevaEncuesta = {
            id: encuestas.length + 1,
            nombreEncuesta: pregunta,
            respuestas: opciones,
            votos: Array (opciones.length).fill(0)
        };

        encuestas.push(nuevaEncuesta);

        respPrincipal = validaRespuesta("¿Quieres agregar otra encuesta?");
    } while (respPrincipal === "s")
};

const muestraEncuesta = () => {
    cantEncuestas = encuestas.length;
    alert(cantEncuestas);
    

 }

nuevaEncuesta();
muestraEncuesta();


