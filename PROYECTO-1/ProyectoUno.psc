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
	
FinAlgoritmo
