const nuevaEncuesta = () => { //Funcion para crear una nueva encuesta
  let respPrincipal = ""; //Variable para saber si se quiere agregar una nueva encuesta
  
  do {
    let opciones = []; //Arreglo para guardar las opciones de respuesta
    let pregunta = validaTexto("Ingrese una nueva Encuesta");
    let resp = "";
    
    do {
      opciones.push(validaTexto(`Ingrese respuesta para \n "${pregunta.toUpperCase()}"`)); //Se pide la opcion de respuesta y se guarda en el arreglo despues de validarla
      
      resp = validaRespuesta(`Quieres ingresar más Opcions de respuesta para "${pregunta.toUpperCase()}" (s/n)?`); //Se pregunta si se quiere agregar mas opciones de respuesta
    
      if (resp === "n" && opciones.length < 2) { //Se valida que se hayan ingresado minimo 2 opciones de respuesta
        alert("Deben ser minimo 2 opciones de respuesta");
        resp = "s"; //Se cambia el valor de la variable para que vuelva a pedir una respuesta
      }
   
    } while (resp === "s");
    
    let nuevaEncuesta = { //Se crea un objeto con la nueva encuesta
      id: encuestas.length + 1,  //Se le asigna un id a la escuesta
      nombreEncuesta: pregunta,  //Se le asigna el nombre de la encuesta
      respuestas: opciones,  //Se le asigna las opciones de respuesta al arreglo de respuestas
      votos: Array(opciones.length).fill(0),  //Se le asigna un arreglo de votos con la longitud de las opciones de respuesta
    };
    
    encuestas.push(nuevaEncuesta); //Se agrega la nueva encuesta al arreglo principal de encuestas
    
    respPrincipal = validaRespuesta(`¿Quieres agregar unea "Nueva Encuesta"? (s/n)?`); //Se pregunta si se quiere agregar una nueva encuesta
  } while (respPrincipal === "s"); //Se repite el ciclo si la respuesta es "s"
};

const mostrarResultados = () => { //Funcion para mostrar los resultados de las encuestas
  encuestas.forEach((encuesta) => { //Se recorre el arreglo de encuestas
    let muestraVotos = `Encuesta ${encuesta.id}: ${encuesta.nombreEncuesta}\n`; //Se crea una variable para mostrar los votos de la encuesta
    encuesta.respuestas.forEach((respuesta, index) => { //Se recorre el arreglo de respuestas de la encuesta
      muestraVotos += `  Respuesta ${index + 1}: ${respuesta} - ${ //Se agrega la respuesta y el numero de votos al texto de la encuesta
        encuesta.votos[index] //En la posicion del arreglo de votos se agrega el numero de votos
      } votos\n`;
    });
    alert(muestraVotos); //Se muestra el texto con los votos de la encuesta
  });
};

const votarEncuesta = () => { //Funcion para votar en una encuesta
  if (encuestas.length === 0) { //Se valida que existan encuestas para votar
    alert("No existen encuestas disponibles para votar.");
    return;
  }

  let seguirVotando = ""; //Variable para saber si se quiere seguir votando

  do {
    
    let seleccionEncuesta = "Seleccione una encuesta para responder:\n"; //Variable para mostrar las encuestas disponibles
    encuestas.forEach((encuesta, index) => { //Se recorre el arreglo de encuestas
      seleccionEncuesta += `${index + 1}. ${encuesta.nombreEncuesta}\n`; //Se agrega el nombre de la encuesta al texto
    });

    let encuestaIndex = parseInt(prompt(seleccionEncuesta)) - 1; //Se pide la encuesta a votar y se guarda en la variable encuestaIndex

    if (encuestaIndex >= 0 && encuestaIndex < encuestas.length) {  //Se valida que la encuesta seleccionada exista
      let encuesta = encuestas[encuestaIndex]; //Se guarda la encuesta seleccionada en la variable encuesta
      
      let seleccionRespuesta = `Seleccione una respuesta para "${encuesta.nombreEncuesta}":\n`; 
      encuesta.respuestas.forEach((respuesta, index) => { //Se recorre el arreglo de respuestas de la encuesta
        seleccionRespuesta += `${index + 1}. ${respuesta}\n`; //Se agrega el numero de respuesta y la respuesta al texto
      });

      let respuestaIndex = parseInt(prompt(seleccionRespuesta)) - 1; //Se pide la respuesta a votar y se guarda en la variable respuestaIndex

      if (respuestaIndex >= 0 && respuestaIndex < encuesta.respuestas.length) { //Se valida que la respuesta seleccionada exista
        encuesta.votos[respuestaIndex]++; //Se suma un voto a la respuesta seleccionada
        alert("¡Voto registrado!");
      } else {
        alert("Respuesta no válida.");
      }
    } else {
      alert("Encuesta no válida.");
    }

    seguirVotando = validaRespuesta("¿Deseas seguir votando? (s/n)?"); //Se pregunta si se quiere seguir votando
  } while (seguirVotando === "s"); //Se repite el ciclo si la respuesta es "s"
};

let encuestas = []; //Arreglo pricnipal para guardar las encuestas

let opcionMenu = 0; //Variable para seleccionar una opcion del menu

do {
  opcionMenu = parseInt(prompt(`Selecciona una opción: 
  1. Nueva Encuesta
  2. Votar Encuesta
  3. Mostrar Resultados
  4. Salir`)); //Se pide una opcion del menu y se guarda en la variable opcionMenu

  switch (opcionMenu) { //Se crea un switch para seleccionar la opcion del menu
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
} while (opcionMenu !== 4) //Se repite el ciclo si la opcion del menu es diferente de 4 "Salir"
