const displayValorAnterior = document.getElementById('valor-anterior'); //Usamos el class que pusimos en los elementos del HTML y lo declaramos con el .getElementById.
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.number'); //Con el .querySelectorAll seleccionamos todos los elementos con esa clase.
const botonesOperadores = document.querySelectorAll('.operator');

const display = new Display(displayValorAnterior, displayValorActual); //Le pasamos como parámetro el valor anterior y el valor actual, para que los vaya actualizando.

botonesNumeros.forEach(boton => {  //"Para cada botón:"
    boton.addEventListener('click', () => //Lo que hacemos acá, es asignarle al botón dos funciones que va a cumplir, una es que el usuario pueda hace click, y la otra es, lo que realiza cuando se clickea, es decir, que agregue el número.
        display.agregarNumero(boton.innerHTML)); //Cuando hagamos click en cada boton, van a pasar su index HTML como parámetro para agregar a la calculadora.
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value)) //Cuando el usuario da click, se configuran los valores de los operadores
})

