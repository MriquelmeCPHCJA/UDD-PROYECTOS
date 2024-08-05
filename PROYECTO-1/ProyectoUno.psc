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
	
	Definir PrecioOriginal, CuponDescuento, Cantidad, Peso, ListaNumero, aux Como real
	Definir Respuesta, Destino, ListaTexto, aux2 Como Caracter
	
	Dimension ListaNumero[5,2]
	Dimension ListaTexto[5]
	
	IVA <- 1.12
	ENVIO <- 10
	KILO <- 2
	DESC <- 0.10
	DESCANT <- 0.05
	
	
	ListaTexto[2] <- "Descuento por Cupón..................................$"
	ListaTexto[3] <- "Impuesto 12%.........................................$"
	ListaTexto[4] <- "Descuento por Cantidad de Artículos..................$"
	
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
	
FinAlgoritmo
