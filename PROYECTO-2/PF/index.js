const nuevaEncuesta = () => {
  let respPrincipal = "";
  
  do {
    let opciones = [];
    let pregunta = validaTexto("Ingrese nueva Encuesta");
    let resp = "";
    
    do {
      opciones.push(
        validaTexto(`Ingrese respuesta para \n "${pregunta.toUpperCase()}"`));
      
      resp = validaRespuesta(`Quieres ingresar más Opcions de respuesta para "${pregunta.toUpperCase()}"`);
    
      if (resp === "n" && opciones.length < 2) {
        alert("Deben ser minimo 2 opciones de respuesta");
        resp = "s";
      }
   
    } while (resp === "s");
    
    let nuevaEncuesta = {
      id: encuestas.length + 1, 
      nombreEncuesta: pregunta, 
      respuestas: opciones, 
      votos: Array(opciones.length).fill(0), 
    };
    
    encuestas.push(nuevaEncuesta);
    
    respPrincipal = validaRespuesta(`¿Quieres agregar unea "Nueva Encuesta"?`);
  } while (respPrincipal === "s");
};

const mostrarResultados = () => {
  encuestas.forEach((encuesta) => {
    let muestraVotos = `Encuesta ${encuesta.id}: ${encuesta.nombreEncuesta}\n`;
    encuesta.respuestas.forEach((respuesta, index) => {
      muestraVotos += `  Respuesta ${index + 1}: ${respuesta} - ${
        encuesta.votos[index]
      } votos\n`;
    });
    alert(muestraVotos);
  });
};

const votarEncuesta = () => {
  if (encuestas.length === 0) {
    alert("No existen encuestas disponibles para votar.");
    return;
  }

  let seguirVotando = "";

  do {
    
    let seleccionEncuesta = "Seleccione una encuesta:\n";
    encuestas.forEach((encuesta, index) => {
      seleccionEncuesta += `${index + 1}. ${encuesta.nombreEncuesta}\n`;
    });

    let encuestaIndex = parseInt(prompt(seleccionEncuesta)) - 1;

    if (encuestaIndex >= 0 && encuestaIndex < encuestas.length) {
      let encuesta = encuestas[encuestaIndex];
      
      let seleccionRespuesta = `Seleccione una respuesta para "${encuesta.nombreEncuesta}":\n`;
      encuesta.respuestas.forEach((respuesta, index) => {
        seleccionRespuesta += `${index + 1}. ${respuesta}\n`;
      });

      let respuestaIndex = parseInt(prompt(seleccionRespuesta)) - 1;

      if (respuestaIndex >= 0 && respuestaIndex < encuesta.respuestas.length) {
        encuesta.votos[respuestaIndex]++;
        alert("¡Voto registrado!");
      } else {
        alert("Respuesta no válida.");
      }
    } else {
      alert("Encuesta no válida.");
    }

    seguirVotando = validaRespuesta("¿Deseas seguir votando?");
  } while (seguirVotando === "s");
};

let encuestas = [];

let opcionMenu = 0;

do {
  opcionMenu = parseInt(prompt(`Selecciona una opción:
  1. Nueva Encuesta
  2. Votar Encuesta
  3. Mostrar Resultados
  4. Salir`));

  switch (opcionMenu) {
    case 1:
      nuevaEncuesta();
      break;
    case 2:
      votarEncuesta();
      break;
    case 3:
      mostrarResultados();
      break;
    case 4:
      alert("¡Hasta luego!");
      break;
    default:
      alert("Opción no válida.");
  }
} while (opcionMenu !== 4)
