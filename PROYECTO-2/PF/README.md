<div align="center">
    <h1>Sistema de Votación en JavaScript <br> Solución PF<h1>
</div>
<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=vscode,js,git" />
  </a>
</p>

<div align="center">
    <img alt="Static Badge" src="https://img.shields.io/badge/UDD-DWFS-orange">
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/MriquelmeCPHCJA/UDD-PROYECTOS?color=green">
    <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/t/MriquelmeCPHCJA/UDD-PROYECTOS">
</div>


## 📚 Descripción del código

Este proyecto consta del desarrollo en dos **Paradigmas de Programación; POO y PF**

### 📂 Estructura del Repositorio
- **index.html** : Archivo base Index HTML 5.
- **validation.js** : Código de validaciones de datos ingresados por el usuario.
- **index.js**: Código de la solución en PF.

## 👨‍💻 SOLUCIÓN EN PF

## Encuestas Interactivas
Este proyecto es una aplicación interactiva en JavaScript que permite a los usuarios crear encuestas, votar en ellas y mostrar los resultados.
### Funcionalidades

1. **Crear una Nueva Encuesta:**
    - Permite al usuario crear una nueva encuesta.
    - Se ingresa la pregunta de la encuesta y las opciones de respuesta.
    - La encuesta debe tener al menos dos opciones de respuesta.
    - La encuesta se almacena en una lista de encuestas.

2. **Votar en una Encuesta:**
    - Muestra una lista de encuestas disponibles.
    - Permite al usuario seleccionar una encuesta y votar por una de las opciones.
    - Se registra el voto en la encuesta seleccionada.

3. **Mostrar Resultados:**
    - Muestra los resultados actuales de todas las encuestas.
    - Se muestra cada encuesta con sus opciones de respuesta y el número de votos recibidos.

### Uso
Cuando se ejecuta el código, se presenta un menú con las siguientes opciones:

- 1) Nueva Encuesta: Crea una nueva encuesta.
- 2) Votar Encuesta: Permite votar en una de las encuestas disponibles.
- 3) Mostrar Resultados: Muestra los resultados de todas las encuestas.
- 4) Salir: Sale de la aplicación.

### Ejecución del Programa
El programa se ejecuta en un bucle que continúa hasta que el usuario elige salir (opción 4).

# 🖥️ Código

## **Funcion nuevaEncuesta():**
La función ```nuevaEncuesta()``` permite a los usuarios crear una nueva encuesta interactiva. A continuación, se desglosan los pasos clave de la función:

1. **Inicialización:**
    - Se define la variable ```respPrincipal```, que se utilizará para controlar si el usuario desea crear otra encuesta después de finalizar la actual.

2. **Bucle Principal (do...while):**
    - Este bucle permite la creación de múltiples encuestas. Se ejecuta mientras el usuario decida seguir creando encuestas ```(respPrincipal === "s")```.

3. **Recolección de Datos para la Encuesta:**
    - Pregunta de la Encuesta:
      - La función solicita al usuario que ingrese la pregunta para la nueva encuesta a través de ```validaTexto("Ingrese nueva Encuesta")```, que se almacena en la variable ```pregunta```.
    - Opciones de Respuesta:
      - Se inicializa un arreglo opciones para almacenar las opciones de respuesta para la encuesta.
      - Un segundo bucle ```do...while``` permite al usuario agregar múltiples opciones de respuesta a la encuesta.
      - Para cada opción de respuesta, se solicita al usuario que ingrese un texto de respuesta con validaTexto, y se añade al arreglo opciones.
      - Si el usuario indica que no desea agregar más opciones ```(resp === "n")```, se verifica que al menos haya dos opciones. Si no es así, se notifica al usuario con un mensaje de alerta y se continúa pidiendo más opciones.

4. **Creación del Objeto Encuesta:**
    - Una vez que se han ingresado la pregunta y las opciones de respuesta, se crea un objeto __nuevaEncuesta__ que contiene:
      - **id:** Un identificador único basado en la longitud actual del arreglo encuestas.
      - **nombreEncuesta:** La pregunta de la encuesta.
      - **respuestas:** Un arreglo de opciones de respuesta.
      - **votos:** Un arreglo inicializado en cero para contar los votos de cada opción.
    - Este objeto se añade al arreglo global encuestas.

5. **Solicitud para Crear Otra Encuesta:**
    - Después de crear una encuesta, se pregunta al usuario si desea agregar otra encuesta. La respuesta se almacena en ```respPrincipal```.

6. **Repetición o Finalización:**
    - Si el usuario desea agregar otra encuesta, el bucle principal se repite; de lo contrario, la función finaliza.

**Código de la Función**
```
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
```

En resumen, la función ```nuevaEncuesta()``` permite a los usuarios crear encuestas dinámicas con una pregunta y múltiples opciones de respuesta, almacenando cada encuesta en un arreglo global para su posterior uso (como votar o mostrar resultados).

## **Funcion mostrarResultados():**
La función ```mostrarResultados()``` tiene como objetivo mostrar los resultados acumulados de todas las encuestas que se han creado y almacenado en el arreglo global encuestas. A continuación, se describe cómo funciona:

1. **Recorrido de las Encuestas:**
    - La función utiliza ```forEach``` para recorrer cada encuesta almacenada en el arreglo encuestas.

2. **Construcción de la Cadena de Resultados:**
    - Para cada encuesta, se crea una cadena de texto ```muestraVotos``` que comienza con el identificador ```(id)``` y el nombre de la encuesta ```(nombreEncuesta)```.
    - Luego, la función recorre las opciones de respuesta de la encuesta usando otro forEach. Para cada opción de respuesta, se agrega a la cadena de texto el número de la respuesta, el texto de la respuesta y la cantidad de votos recibidos para esa opción.

3. **Mostrar Resultados:**
    - Después de construir la cadena de texto con los resultados de la encuesta, se muestra al usuario mediante una ventana de alerta (alert).

4. **Repetición para Cada Encuesta:**
    - El proceso se repite para cada encuesta en el arreglo encuestas, mostrando los resultados de cada una en una ventana de alerta separada.

**Código de la función**
```
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

```

En resumen, la función ```mostrarResultados()``` recopila y muestra los resultados de todas las encuestas almacenadas, presentando las preguntas, las opciones de respuesta y la cantidad de votos que cada opción ha recibido.


## **Función votarEncuesta():**
La función ```votarEncuesta()``` permite a los usuarios votar en las encuestas que han sido creadas previamente y almacenadas en el arreglo global ```encuestas```. A continuación, se describe cómo funciona esta función:

1. **Verificación de Encuestas Disponibles:**
    - La función primero verifica si existen encuestas en el arreglo encuestas. Si no hay encuestas, muestra un mensaje de alerta ("No existen encuestas disponibles para votar.") y termina la ejecución de la función utilizando ```return```.

2. **Inicialización de la Variable para Continuar Votando:**
    - Se define una variable seguirVotando, que se utilizará para controlar si el usuario desea seguir votando después de realizar un voto.

3. **Bucle Principal (do...while):**
    - Este bucle permite al usuario votar en múltiples encuestas mientras lo desee ```(seguirVotando === "s")```.

4. **Selección de la Encuesta:**
    - La función construye una cadena de texto ```seleccionEncuesta``` que lista todas las encuestas disponibles, con sus respectivos números. Esto se hace recorriendo el arreglo encuestas usando ```forEach```.
    - Se muestra esta lista al usuario utilizando ```prompt```, permitiéndole seleccionar una encuesta ingresando su número correspondiente. El índice seleccionado ```(encuestaIndex)``` se calcula restando __1__ al valor ingresado para alinearlo con los índices del arreglo.

5. **Validación de la Selección de Encuesta:**
    - Se verifica si el índice ingresado es válido (es decir, si está dentro del rango del arreglo encuestas). Si es válido, se procede a la siguiente etapa; si no, se muestra un mensaje de alerta ```("Encuesta no válida.")```.

6. **Selección de la Respuesta:**
    - Si la encuesta seleccionada es válida, se construye otra cadena de texto seleccionRespuesta que muestra todas las opciones de respuesta disponibles para esa encuesta. Esto también se realiza con un bucle ```forEach```.
    - Se muestra esta lista al usuario mediante ```prompt```, permitiéndole seleccionar una opción de respuesta ingresando su número correspondiente. El índice seleccionado ```(respuestaIndex)``` se calcula restando __1__ al valor ingresado.

7. **Validación de la Selección de Respuesta:**
    - Se verifica si el índice de respuesta ingresado es válido (es decir, si está dentro del rango del arreglo respuestas). Si es válido, el voto se registra incrementando en __1__ el valor correspondiente en el arreglo ```votos``` para esa opción de respuesta.
    - Si el voto se registra correctamente, se muestra un mensaje de confirmación ```("¡Voto registrado!")```. Si la selección de respuesta es inválida, se muestra un mensaje de alerta ```("Respuesta no válida.")```.

8.  **Solicitud para Continuar Votando:**
    - Después de registrar el voto, se pregunta al usuario si desea seguir votando. La respuesta se almacena en ```seguirVotando```, y el bucle se repite si la respuesta es afirmativa.

9. **Finalización:**
    - El bucle se detiene cuando el usuario decide no seguir votando ```(seguirVotando !== "s")```, y la función termina.


**Código de la función**
```
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
```


En resumen, la función votarEncuesta guía al usuario a través del proceso de seleccionar una encuesta, elegir una opción de respuesta, registrar su voto, y decidir si desea seguir votando en otras encuestas disponibles.

## **Bloque Principal y Menú**
Este bloque de código implementa un ```menú interactivo``` que permite al usuario seleccionar diferentes opciones para interactuar con un sistema de encuestas. Aquí explico cómo funciona cada parte del código:

1. **Inicialización de Variables:**
    - ```let encuestas = [];```: Inicializa un arreglo vacío llamado encuestas, que almacenará todas las encuestas creadas durante la ejecución del programa.
    - ```let opcionMenu = 0;```: Declara una variable ```opcionMenu``` que se usará para almacenar la opción seleccionada por el usuario en el menú.

2. **Bucle do...while:**
    - Este bucle asegura que el menú se siga mostrando hasta que el usuario decida salir del programa ```(seleccionando la opción 4)```.

3. **Mostrar Menú y Capturar Selección del Usuario:**
    - ```opcionMenu = parseInt(prompt(...));```: Se muestra un mensaje con el menú de opciones al usuario utilizando ```prompt```, y el valor ingresado por el usuario se convierte en un número entero usando ```parseInt```. El menú presenta cuatro opciones:
        1. Nueva Encuesta: Para crear una nueva encuesta.
        2. Votar Encuesta: Para votar en una encuesta existente.
        3. Mostrar Resultados: Para ver los resultados de todas las encuestas.
        4. Salir: Para finalizar el programa.

4. **Estructura de Control switch:**
    - Dependiendo de la opción seleccionada por el usuario, se ejecuta un caso específico del ```switch```:
      - **Caso 1** ```(case 1)```: Llama a la función nuevaEncuesta(), que permite al usuario crear una nueva encuesta.
      - **Caso 2** ```(case 2)```: Llama a la función ```votarEncuesta()```, que permite al usuario votar en una encuesta existente.
      - **Caso 3** ```(case 3)```: Llama a la función ```mostrarResultados()```, que muestra los resultados de las encuestas.
      - **Caso 4** ```(case 4)```: Muestra un mensaje de despedida ```"¡Hasta luego!"``` y termina el bucle, lo que finaliza el programa.
      - **Caso** ```default```: Si el usuario ingresa un valor que no corresponde a ninguna de las opciones (1, 2, 3 o 4), se muestra un mensaje de alerta indicando ```"Opción no válida.```"

5. **Condición de Terminación del Bucle:**
    - El bucle ```do...while``` continuará repitiéndose hasta que opcionMenu sea igual a 4, es decir, cuando el usuario seleccione ```"Salir"```.

**Código de la función**
```
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
```
En resumen, este código presenta un menú interactivo que permite al usuario crear encuestas, votar en ellas, ver los resultados y salir del programa. El flujo del programa está controlado por un bucle do...while que sigue mostrando el menú hasta que el usuario elija salir.

## 📧 Contácto
**Marcelo Riquelme**

**Email**: luriquelme.dwfs1@bootcampudd.cl