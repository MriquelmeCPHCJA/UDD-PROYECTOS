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
	
FinAlgoritmo
