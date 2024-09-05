<div align="center">
    <h1>Sistema de Votación en JavaScript <br> Solución POO<h1>
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

## 👨‍💻 SOLUCIÓN EN POO

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

- 1. Nueva Encuesta: Crea una nueva encuesta.
- 2. Votar Encuesta: Permite votar en una de las encuestas disponibles.
- 3. Mostrar Resultados: Muestra los resultados de todas las encuestas.
- 4. Salir: Sale de la aplicación.

### Ejecución del Programa
El programa se ejecuta en un bucle que continúa hasta que el usuario elige salir (opción 4).

# 🖥️ Código
## **Clase Encuesta:**

Esta clase Encuesta está diseñada para manejar encuestas, permitiendo registrar votos y mostrar los resultados de una encuesta.

1. **Constructor**:
    - **Propiedades**:
      - ```id```: Identificador único para la encuesta.
      - ```nombreEncuesta```: Nombre o título de la encuesta.
      - ```respuestas```: Un array que contiene las posibles respuestas de la encuesta.
      - ```votos```: Un array del mismo tamaño que respuestas, inicializado con ceros, que mantiene el conteo de votos para cada opción de respuesta.

2. **Método ```registraVoto```**:
    - **Funcionalidad**:
      - Este método registra un voto para una de las respuestas.
      - Parámetro ```respuestaIndex```: Es el índice de la respuesta seleccionada por el usuario (basado en la posición en el array respuestas).
      - Verifica si el ```respuestaIndex``` es válido (dentro del rango de índices del array respuestas).
      - Si es válido, incrementa en uno el conteo de votos para esa respuesta.
      - Si no es válido, muestra un mensaje de error.

3. **Método ```mostrarResultados```**:
    - **Funcionalidad**:
        - Este método muestra los resultados de la encuesta, incluyendo el nombre de la encuesta, las respuestas y la cantidad de votos para cada una.
        - ```muestraVotos```: Es un string que se va construyendo y que finalmente contiene todos los resultados.
        - Itera sobre las respuestas usando ```forEach```, y para cada respuesta, agrega una línea al string ```muestraVotos``` con el número de la respuesta, el texto de la respuesta y el número de votos recibidos.
        - Finalmente, muestra el string ```muestraVotos``` usando ```alert```.

**Código de la Clase**
```
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
```
En resumen la clase ```Encuesta``` permite crear una encuesta con un nombre y varias respuestas, registrar votos para las respuestas y luego mostrar los resultados acumulados. Cada voto se cuenta en el arreglo ```votos```, y se puede visualizar la cantidad total de votos por respuesta con el método ```mostrarResultados```.

## **Clase Encuesta:**
La clase ```SistemaDeEncuestas``` es un sistema completo para manejar encuestas, permitiendo crear encuestas, votar en ellas, mostrar los resultados, y administrar todo el flujo de trabajo asociado

1. **Constructor**:
    - **Propiedad**:
      - ```encuestas```: Un array donde se almacenan todas las encuestas creadas en el sistema.

2. **Método ```crearEncuesta```**:
    - **Funcionalidad**:
      - **Creación de Encuestas**: Permite al usuario crear una nueva encuesta solicitando una pregunta principal y luego varias opciones de respuesta.
      - **Validación**: Asegura que cada encuesta tenga al menos dos opciones de respuesta antes de permitir su creación.
      - **Ciclo**: El proceso de creación de encuestas puede repetirse mientras el usuario quiera agregar más encuestas.

3. **Método ```votarEncuesta```**:
    - **Funcionalidad**:
      - **Votación en Encuestas**: Permite al usuario seleccionar una encuesta disponible y votar por una de las opciones de respuesta.
      - **Verificación**: Asegura que haya encuestas disponibles antes de intentar votar, y que las elecciones del usuario (tanto de encuesta como de respuesta) sean válidas.
      - **Ciclo**: Permite votar en varias encuestas mientras el usuario desee seguir haciéndolo.

4. **Método ```mostrarResultados```**:
    - **Funcionalidad**:
      - **Mostrar Resultados**: Llama al método ```mostrarResultados``` de cada encuesta en el sistema, mostrando los resultados acumulados de todas las encuestas.

5. **Método ```iniciarSistema```**:
    - **Funcionalidad**:
      - **Gestión del Menú**: Muestra un menú para que el usuario seleccione entre crear una nueva encuesta, votar en una encuesta, mostrar los resultados, o salir del sistema.
      - **Ciclo**: El menú se repite hasta que el usuario selecciona la opción de salir.

**Código de la Clase**
```
class SistemaDeEncuestas { 
  constructor() { 
    this.encuestas = []; 
  }

  crearEncuesta() { 
    
    let respPrincipal = "";

    do { 
      const opciones = [];
      const pregunta = validaTexto("Ingrese nueva Encuesta");
      let resp = "";

      do {
        opciones.push(validaTexto(`Ingrese respuesta para \n "${pregunta.toUpperCase()}"`)); 

        resp = validaRespuesta(`¿Quieres ingresar más Opciones de respuesta para "${pregunta.toUpperCase()}"?`); 

        if (resp === "n" && opciones.length < 2) {
          alert("Deben ser mínimo 2 opciones de respuesta"); 
          
          resp = "s"; 
          
        }
      } while (resp === "s"); 

      const nuevaEncuesta = new Encuesta(this.encuestas.length + 1, pregunta, opciones); 
      
      this.encuestas.push(nuevaEncuesta); 

      respPrincipal = validaRespuesta(`¿Quieres agregar una "Nueva Encuesta"?`); 
      
    } while (respPrincipal === "s"); 
    
  }

  votarEncuesta() { 
    
    if (this.encuestas.length === 0) { /
    
      alert("No existen encuestas disponibles para votar."); 
      
      return; 
    }

    let seguirVotando = ""; 

    do {
      let seleccionEncuesta = "Seleccione una encuesta:\n"; 
      
      this.encuestas.forEach((encuesta, index) => { // Recorre el array de encuestas
        seleccionEncuesta += `${index + 1}. ${encuesta.nombreEncuesta}\n`; 
        
      });

      const encuestaIndex = parseInt(prompt(seleccionEncuesta)) - 1; 

      if (encuestaIndex >= 0 && encuestaIndex < this.encuestas.length) { 
        
        const encuesta = this.encuestas[encuestaIndex]; 

        let seleccionRespuesta = `Seleccione una respuesta para "${encuesta.nombreEncuesta}":\n`; 
        
        encuesta.respuestas.forEach((respuesta, index) => { 
          seleccionRespuesta += `${index + 1}. ${respuesta}\n`; 
          
        });

        const respuestaIndex = parseInt(prompt(seleccionRespuesta)) - 1;

        encuesta.registrarVoto(respuestaIndex); 
        
      } else {
        alert("Encuesta no válida."); 
      }

      seguirVotando = validaRespuesta("¿Deseas seguir votando?"); 
      
    } while (seguirVotando === "s"); /
    
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
```
En resumen la clase ```SistemaDeEncuestas``` es un sistema de administración de encuestas que permite crear encuestas con múltiples opciones de respuesta, votar en ellas y mostrar los resultados acumulados. Todo el proceso está guiado por un menú interactivo que permite al usuario navegar por las diferentes opciones del sistema.

## **Ejecución** ##
Las siguientes líneas de código crean una instancia de la clase ```SistemaDeEncuestas``` y luego inician el sistema de encuestas. 

1. **Instancia de ```SistemaDeEncuestas```**:
    - Aquí se está creando un nuevo objeto basado en la clase ```SistemaDeEncuestas```. Este objeto ```(sistema)``` tendrá acceso a todas las propiedades y métodos definidos en la clase.
    - La palabra clave ```new``` se utiliza para crear una nueva instancia de la clase, lo que llama al constructor de la clase ```(constructor)```, inicializando el arreglo vacío ```encuestas``` dentro del objeto ```sistema```.

```
const sistema = new SistemaDeEncuestas();
```
2. **Iniciar el Sistema**:
    - Esta línea llama al método ```iniciarSistema()``` del objeto ```sistema```.
    - ```iniciarSistema()``` es el método que pone en marcha el sistema de encuestas.
    - Al ejecutar este método, se muestra un menú interactivo que permite al usuario seleccionar entre crear nuevas encuestas, votar en encuestas existentes, mostrar los resultados de las encuestas, o salir del sistema.
    - El menú se repite hasta que el usuario elige la opción de salir.

```
sistema.iniciarSistema();
```
En resumen, estas líneas inician todo el proceso del sistema de encuestas. Primero, se crea un sistema de encuestas (un objeto basado en la clase ```SistemaDeEncuestas```), y luego se inicia este sistema, permitiendo al usuario interactuar con las encuestas mediante un menú que gestiona todas las operaciones posibles.

## 📧 Contácto
**Marcelo Riquelme**

**Email**: luriquelme.dwfs1@bootcampudd.cl