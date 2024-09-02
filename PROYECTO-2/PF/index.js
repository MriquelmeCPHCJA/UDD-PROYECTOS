//alert('Proyecto 2 PF')

// Uso de Validadores Externos:
// Function validaEntradaNumero(opt)
// Function validaTexto(opt)
// Function validaRespuesta(opt)
// ** opt es un texto opcional que puede recibir para mostrar un mensaje personalizado

// Declaro una funcion para crear encuestas nuevas
const nuevaEncuesta = () => {
  // declaro variable que uso para controlar si el usuario quiere seguir creando nuevas encuestas
  let respPrincipal = "";

  // Bucle principal que se repetira hasta que el usuario no quiera agregar mas encuestas
  do {
    // Declaro arreglo vacio para guardas las opciones de respuesta
    let opciones = [];

    // Pido al usuario que ingrese la pregunta principal de la encuesta mediante la función validaTexto, que asegura que el usuario ingrese un texto valido.
    let pregunta = validaTexto("Ingrese nueva Encuesta");

    let resp = "";
    //Bucle para las opciones de respuesta de la encuesta creada
    do {
      //Ingreso la opcion de respuesta al array cuando pasa la validación de texto
      opciones.push(
        validaTexto(`Ingrese respuesta para \n "${pregunta.toUpperCase()}"`)
      );

      // Pregunto al usuario si desea ingresar más opciones de respuestas
      resp = validaRespuesta(
        `Quieres ingresar más Opcions de respuesta para "${pregunta.toUpperCase()}"`
      );

      // Valido si el usuario no quiere seguir ingresando opciones a pesar de solo haber una respuesta
      if (resp === "n" && opciones.length < 2) {
        alert("Deben ser minimo 2 opciones de respuesta");
        resp = "s";
      }

      // El bucle se repite mientras la respues del usuario sea Si
    } while (resp === "s");

    //Una vez que se han agregado todas las opciones de respuesta, se crea un objeto nuevaEncuesta que contiene:
    let nuevaEncuesta = {
      id: encuestas.length + 1, //Identificador para asignar a cada encuesta
      nombreEncuesta: pregunta, //La pregunta de la encuesta
      respuestas: opciones, //Arreglo que contiene las respuestas/opciones
      votos: Array(opciones.length).fill(0), //Hago un arreglo nuevo del tamaño del arreglod e respuestas y relleno con ceros para poder contabilizar los votos.
    };

    //Guardo la encuesta en el arreglo principal de encuestas
    encuestas.push(nuevaEncuesta);

    //Pregunto al usuario si desea crear otra encuesta
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
    // Muestra las encuestas disponibles
    let seleccionEncuesta = "Seleccione una encuesta:\n";
    encuestas.forEach((encuesta, index) => {
      seleccionEncuesta += `${index + 1}. ${encuesta.nombreEncuesta}\n`;
    });

    let encuestaIndex = parseInt(prompt(seleccionEncuesta)) - 1;

    if (encuestaIndex >= 0 && encuestaIndex < encuestas.length) {
      let encuesta = encuestas[encuestaIndex];

      // Mostrar opciones de respuesta para la encuesta seleccionada
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

nuevaEncuesta();
votarEncuesta();
mostrarResultados();
