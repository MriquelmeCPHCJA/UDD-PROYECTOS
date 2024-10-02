
// Creo la clase Encuesta que contiene los metodos registrarVoto y mostrarResultados
class Encuesta {
  constructor(id, nombreEncuesta, respuestas) {
    this.id = id;
    this.nombreEncuesta = nombreEncuesta;
    this.respuestas = respuestas;
    this.votos = Array(respuestas.length).fill(0);
  }

  // Metodo para registrar el voto
  registrarVoto(respuestaIndex) {
    if (respuestaIndex >= 0 && respuestaIndex < this.respuestas.length) { // Verifica que existan respuestas
      this.votos[respuestaIndex]++; // Suma un voto a la respuesta seleccionada
      alert("¡Voto registrado!"); // Muestra mensaje de confirmación
    } else {
      alert("Respuesta no válida."); // Muestra mensaje de error si la respuesta no es valida o no existen respuestas
    }
  }

  // Metodo para mostrar los resultados
  mostrarResultados() {
    let muestraVotos = `Encuesta ${this.id}: ${this.nombreEncuesta}\n`; // Guarda el nombre de la encuesta y su id
    this.respuestas.forEach((respuesta, index) => {  // Recorro el array de respuestas
      muestraVotos += `  Respuesta ${index + 1}: ${respuesta} - ${this.votos[index]} votos\n`;  // Guardo el nombre de la respuesta y la cantidad de votos
    });
    alert(muestraVotos); // Mensaje con los resultados
  }
}

class SistemaDeEncuestas { // Creo la clase SistemaDeEncuestas
  constructor() { // Creo el constructor
    this.encuestas = []; // Creo un array vacio para guardar las encuestas
  }

  crearEncuesta() { // Metodo para crear una nueva encuesta
    let respPrincipal = "";

    do { // Ciclo para crear una nueva encuesta
      const opciones = [];
      const pregunta = validaTexto("Ingrese nueva Encuesta");
      let resp = "";

      do {
        opciones.push(validaTexto(`Ingrese respuesta para \n "${pregunta.toUpperCase()}"`)); // Agrega una nueva respuesta al arreglo de opciones

        resp = validaRespuesta(`¿Quieres ingresar más Opciones de respuesta para "${pregunta.toUpperCase()}"? (s/n)?`); // Pregunta si se desea agregar más respuestas

        if (resp === "n" && opciones.length < 2) {
          alert("Deben ser mínimo 2 opciones de respuesta"); // Muestra mensaje de error si no se ingresan al menos 2 respuestas
          resp = "s"; // cambiar la respuesta a "s" para que vuelva a preguntar
        }
      } while (resp === "s"); // Repite el ciclo si la respuesta es "s"

      const nuevaEncuesta = new Encuesta(this.encuestas.length + 1, pregunta, opciones); // Guarda la nueva encuesta
      this.encuestas.push(nuevaEncuesta); // Agrega la nueva encuesta al arreglo de encuestas

      respPrincipal = validaRespuesta(`¿Quieres agregar una "Nueva Encuesta"? (s/n)?`); // Pregunta si se desea agregar una nueva encuesta
    } while (respPrincipal === "s"); // Repite el ciclo si la respuesta es "s"
  }

  votarEncuesta() { // Metodo para votar en una encuesta
    if (this.encuestas.length === 0) { // Verifica si existen encuestas
      alert("No existen encuestas disponibles para votar."); // Muestra mensaje de error si no existen encuestas
      return; 
    }

    let seguirVotando = ""; // Se da valor vacio a la variable seguirVotando

    do {
      let seleccionEncuesta = "Seleccione una encuesta:\n"; // Mensaje para seleccionar una encuesta
      this.encuestas.forEach((encuesta, index) => { // Recorre el array de encuestas
        seleccionEncuesta += `${index + 1}. ${encuesta.nombreEncuesta}\n`; // Creao una cadena de texto que contiene una lista de encuestas con su respectivo número al principio
      });

      const encuestaIndex = parseInt(prompt(seleccionEncuesta)) - 1; // Guarda el número de la encuesta seleccionada en ecuestaIndex

      if (encuestaIndex >= 0 && encuestaIndex < this.encuestas.length) { // Verifica que la encuesta seleccionada sea válida
        const encuesta = this.encuestas[encuestaIndex]; // Guarda la encuesta seleccionada en la variable encuesta

        let seleccionRespuesta = `Seleccione una respuesta para "${encuesta.nombreEncuesta}":\n`; // Mensaje para mostrar al usuario una opcion de respuesta dentro de la encuesta seleccionada
        encuesta.respuestas.forEach((respuesta, index) => { 
          seleccionRespuesta += `${index + 1}. ${respuesta}\n`; // creo una cadena de texto que contiene una lista de respuestas con su respectivo número al principio
        });

        const respuestaIndex = parseInt(prompt(seleccionRespuesta)) - 1;

        encuesta.registrarVoto(respuestaIndex); //llamo al metodo registrarVoto de la clase Encuesta con la respuesta seleccionada para registrar el voto
      } else {
        alert("Encuesta no válida."); // Muestra mensaje de error si el usuario selecciona una encuesta no válida
      }

      seguirVotando = validaRespuesta("¿Deseas seguir votando? (s/n)?"); // Pregunta si se desea seguir votando
    } while (seguirVotando === "s"); // Repite el ciclo si la respuesta es "s"
  }

  mostrarResultados() { // Metodo para mostrar los resultados de las encuestas
    this.encuestas.forEach((encuesta) => {
      encuesta.mostrarResultados(); // llama al metodo mostrarResultados de la clase Encuesta
    });
  }

  iniciarSistema() { // Metodo para iniciar el sistema
    let opcionMenu = 0;

    do {
      opcionMenu = parseInt( // Pide al usuario que seleccione una opción
        prompt(`Selecciona una opción:
        1. Nueva Encuesta
        2. Votar Encuesta
        3. Mostrar Resultados
        4. Salir`)
      );

      switch (opcionMenu) {
        case 1:
          this.crearEncuesta();
          break;
        case 2:
          this.votarEncuesta();
          break;
        case 3:
          this.mostrarResultados();
          break;
        case 4:
          alert("¡Hasta luego!");
          break;
        default:
          alert("Opción no válida.");
      }
    } while (opcionMenu !== 4); // Repite el ciclo mientras la opción es diferente de 4 "Salir"
  }
}


const sistema = new SistemaDeEncuestas(); // Creo la instancia de la clase SistemaDeEncuestas
sistema.iniciarSistema(); // Llamo al metodo iniciarSistema de la clase SistemaDeEncuestas
