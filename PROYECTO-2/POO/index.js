// alert('Conectado POO');

// Creo la Clase Encuesta
class Encuesta {
    constructor(tituloEncuesta){ // Espero el argumento tituloEncuesta para guardar
        this.titulo = tituloEncuesta; // asigno el tituloEncuesta a titulo
        this.preguntas = []; //defino preguntas como un arrgelo vacio
    }
}

// Creo la clase Preguntas donde guardare como texto la pregunta y las opciones las pasaré como un arreglo de respuestas posibles
class Preguntas {
    constructor(texto, opciones){
        this.textoPregunta = texto; // Guardo la pregunta ingresada como texto
        this.opcionesRespuesta = opciones;  // guardo el arreglo que traigo como variable opciones con las respuestas posibles
        this.votos = new Array(opciones.length).fill(0); // Creo un nuevo arreglo del mismo largo de opciones y que todas las posiciones contengan un valor 0 para guardar los votos por opcion.
    }
}