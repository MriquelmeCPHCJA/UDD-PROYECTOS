Funcion ValTexto <- ValidaTexto(cadenaTexto)
	ValTexto <- ""
	Repetir
		Leer ValTexto
	Hasta Que ValTexto <> ""
FinFuncion

Funcion ValNumero <- ValidaNumero(num)
	ValNumero <- 0
	Repetir
		Leer ValNumero
	Hasta Que ValNumero > 0
FinFuncion

Algoritmo ProyectoUno
	
	Definir PrecioOriginal, CuponDescuento, Cantidad, Peso, ListaNumero Como real
	Definir Respuesta, Destino, ListaTexto Como Caracter
	
	Dimension ListaNumero[5,2]
	Dimension ListaTexto[5]
	
	IVA <- 1.12
	ENVIO <- 10
	KILO <- 2
	DESC <- 0.10
	DESCANT <- 0.05
	
	
	ListaTexto[2] <- "Descuento por Cupón................................... $"
	ListaTexto[3] <- "Impuesto 12%........................................ $"
	ListaTexto[4] <- "Descuento por Cantidad de Artículos................. $"
	
	Escribir "Ingrese Nombre de Producto"
	//Llamada a función para leer y validar nombre no vacio
	ListaTexto[1] <- ValidaTexto(ValTexto)	
	Limpiar Pantalla
	
	Escribir "Ingrese Precio del Producto ", "[" ListaTexto[1] "]"
	//Llamada a funcion para leer y validar que numero sea positivo mayor que cero
	ListaNumero[1,1] <- ValidaNumero(ValNumero)  
	
	Escribir ListaNumero[1,1]
	
	Limpiar Pantalla
	
	Escribir "¿Tiene Cupon de Descuento? "
	
	// Validar que respuesta sea "S" o "s" para Si y "n" o "N" para No
	Repetir
		Leer Respuesta
	Hasta Que Respuesta ="S" o Respuesta = "s" o Respuesta = "N" o Respuesta ="n"
	
	Escribir Respuesta
	
	Limpiar Pantalla
	
	Escribir "Ingrese Cantidad de Productos de [", ListaTexto[1], "]"
	//Llamada a funcion para leer y validar que numero sea positivo mayor que cero
	Cantidad <- ValidaNumero(ValNumero)
	
	Limpiar Pantalla
	
	Escribir "Ingrese Cuidad de Destino del Producto"
	ListaTexto[5] <- ValidaTexto(ValTexto)
	
	Limpiar Pantalla
	
	Escribir "Ingrese el Peso en Kg del Paquete "
	//Llamada a funcion para leer y validar que numero sea positivo mayor que cero
	Peso <- ValidaNumero(ValNumero)
	
	Limpiar Pantalla
	
	// Empiezan los cálculos
	
	si Respuesta = "s" o Respuesta = "S" Entonces
		ListaNumero[2,1] <- ListaNumero[1,1] - (ListaNumero[1,1] * DESC)
		
	SiNo
		ListaNumero[2,1] <- ListaNumero[1,1]
		
	FinSi
	
	ListaNumero[3,1] <- (ListaNumero[2,1] * IVA)
	
	si Cantidad >= 2 Entonces
		ListaNumero[4,1] <- ListaNumero[3,1] - (ListaNumero[3,1] * DESCANT)
		
	SiNo
		ListaNumero[4,1] <- ListaNumero[3,1]
		
	FinSi
	
	// Relleno la Matriz con los datos a mostrar por pantalla
	ListaNumero[5,1] <- (KILO * Peso) + ENVIO
	ListaNumero[1,2] <- (ListaNumero[4,1] * Cantidad) + ListaNumero[5,1]
	ListaNumero[2,2] <- ListaNumero[1,1] - ListaNumero[2,1]
	ListaNumero[3,2] <- ListaNumero[3,1] - ListaNumero[2,1]
	ListaNumero[4,2] <- ListaNumero[3,1] - ListaNumero[4,1]
	ListaNumero[5,2] <- ListaNumero[5,1]
	
	Para i Desde 1 Hasta 5 Hacer
		Segun i Hacer
			1:
				Escribir " Costo Final del Producto [", ListaTexto[i] ,"] es................................$", ListaNumero[i,2]
				Escribir "****************************************************************************";
			4:
				Escribir ListaTexto[i], ListaNumero[i,2], "........ ", Cantidad, "x$", ListaNumero[i,1]
			5:
				Escribir "El costo de Envío a la cuidad de [", ListaTexto[i] ,"] es ..................... $", ListaNumero[i,2];
				
			De Otro Modo:
				Escribir ListaTexto[i] , ListaNumero[i,2], " ......... $", ListaNumero[i,1];
		Fin Segun
	FinPara
FinAlgoritmo
