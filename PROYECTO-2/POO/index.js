class Encuesta {
  constructor(id, nombreEncuesta, respuestas) {
    this.id = id;
    this.nombreEncuesta = nombreEncuesta;
    this.respuestas = respuestas;
    this.votos = Array(respuestas.length).fill(0);
  }

  registrarVoto(respuestaIndex) {
    if (respuestaIndex >= 0 && respuestaIndex < this.respuestas.length) {
      this.votos[respuestaIndex]++;
      alert("¡Voto registrado!");
    } else {
      alert("Respuesta no válida.");
    }
  }

  mostrarResultados() {
    let muestraVotos = `Encuesta ${this.id}: ${this.nombreEncuesta}\n`;
    this.respuestas.forEach((respuesta, index) => {
      muestraVotos += `  Respuesta ${index + 1}: ${respuesta} - ${this.votos[index]} votos\n`;
    });
    alert(muestraVotos);
  }
}

class SistemaDeEncuestas {
  constructor() {
    this.encuestas = [];
  }

  crearEncuesta() {
    let respPrincipal = "";

    do {
      let opciones = [];
      let pregunta = validaTexto("Ingrese nueva Encuesta");
      let resp = "";

      do {
        opciones.push(
          validaTexto(
            `Ingrese respuesta para \n "${pregunta.toUpperCase()}"`
          )
        );

        resp = validaRespuesta(
          `¿Quieres ingresar más Opciones de respuesta para "${pregunta.toUpperCase()}"?`
        );

        if (resp === "n" && opciones.length < 2) {
          alert("Deben ser mínimo 2 opciones de respuesta");
          resp = "s";
        }
      } while (resp === "s");

      const nuevaEncuesta = new Encuesta(
        this.encuestas.length + 1,
        pregunta,
        opciones
      );
      this.encuestas.push(nuevaEncuesta);

      respPrincipal = validaRespuesta(`¿Quieres agregar una "Nueva Encuesta"?`);
    } while (respPrincipal === "s");
  }

  votarEncuesta() {
    if (this.encuestas.length === 0) {
      alert("No existen encuestas disponibles para votar.");
      return;
    }

    let seguirVotando = "";

    do {
      let seleccionEncuesta = "Seleccione una encuesta:\n";
      this.encuestas.forEach((encuesta, index) => {
        seleccionEncuesta += `${index + 1}. ${encuesta.nombreEncuesta}\n`;
      });

      let encuestaIndex = parseInt(prompt(seleccionEncuesta)) - 1;

      if (encuestaIndex >= 0 && encuestaIndex < this.encuestas.length) {
        let encuesta = this.encuestas[encuestaIndex];

        let seleccionRespuesta = `Seleccione una respuesta para "${encuesta.nombreEncuesta}":\n`;
        encuesta.respuestas.forEach((respuesta, index) => {
          seleccionRespuesta += `${index + 1}. ${respuesta}\n`;
        });

        let respuestaIndex = parseInt(prompt(seleccionRespuesta)) - 1;

        encuesta.registrarVoto(respuestaIndex);
      } else {
        alert("Encuesta no válida.");
      }

      seguirVotando = validaRespuesta("¿Deseas seguir votando?");
    } while (seguirVotando === "s");
  }

  mostrarResultados() {
    this.encuestas.forEach((encuesta) => {
      encuesta.mostrarResultados();
    });
  }

  iniciarSistema() {
    let opcionMenu = 0;

    do {
      opcionMenu = parseInt(
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
    } while (opcionMenu !== 4);
  }
}


const sistema = new SistemaDeEncuestas();
sistema.iniciarSistema();
