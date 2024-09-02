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
        
        let pregunta = validaTexto("Ingrese Nueva Encuesta");
        
        do {
            resp = "";
            opciones.push(validaTexto(`Ingrese opción de respuesta para \n "${pregunta.toUpperCase()}"`));
            resp = validaRespuesta("¿Quieres ingresar otra respuesta? S/N");
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


