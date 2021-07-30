class Display {
        constructor(displayValorAnterior,  displayValorActual) { //le pasamos valores para instanciarla
        this.displayValorActual =  displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined; //Guarda el tipo de operación que está usando el usuario.
        this.valorActual = ''; //A diferencia de los que ya declaramos, estos son los números que estamos guardando.
        this.valorAnterior = '';    
        this.signos = {
            sumar: '+',
            dividir: '%',
            multiplicar: 'x',
            restar: '-',
        }
    }
    
        borrar() {
            this.valorActual = this.valorActual.toString().slice(0,-1);
            this.imprimirValores();
        }
        borrarTodo() { 
            this.ValorActual = '';//Seteamos los dos valores en blanco.
            this.valorAnterior = '';
            this.tipoOperacion = undefined;
            this.imprimirValores
        }
        computar(tipo) {
            this.tipoOperacion !== 'igual' && this.calcular(); //Si el tipo de operación no es igual a "igaul", solo entonces va a poder calcular.
            this.tipoOperacion = tipo; //Y actualizamos el tipo de operación  al tipo actual, al que acabamos de recibir.
            this.valorAnterior = this.valorActual || this.valorAnterior; //Y podemos ver el valor anterior o el actual, cambiando solo el tipo de operador.
            this.valorActual = '';
            this.imprimirValores();
        }

    agregarNumero(number) {
        if(number === '.' && this.valorActual.includes('.')) return //Lo que estamos diciendo es preguntar, ¿Queremos agregar un punto decimal? y, ¿Ya hay un punto decimal incluido?, enotnces no agregues nada más.
        this.valorActual = this.valorActual.toString() + number.toString(); //Lo que queremos es que el valor acutal sea igual al numero que recibimos. Colocamos el toString porque por momentos va a ser numeros y por momentos va a ser strings, con el punto decimal claro.
        this.imprimirValores();
        
    }
    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual; //Seteamos el texto que tiene dentro del HTML.
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`; //Si existe, utilizalo, y si no, pon un string vacío, porque no queremos ver ningún signo en el display.
    }

    calcular() { //Toma valores que tiene cargado el Display, y se los da a la calculadora para que haga el calculo.
        const valorAnterior = parsefloat(this.valorAnterior); //El parsefloat sirve para que deje de ser un string y vuelva a ser un número.
        const valorAnterior = parsefloat(this.valorActual);
        //Y ya tenemos estod dos valores como números para ser utilizados.
        if(isNaN(valorActual) || isNaN(valorAnterior)) return //Si ambos no son numeros, no vamos a hacer ninguna operación, porque no hay nada que operar.
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual); //Va a buscar directamente los tipos de operaciones que tenemos en "Calculadora.js" para poder operar con lo que ingrese el usuario.

    }
}