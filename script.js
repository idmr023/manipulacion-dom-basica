const h1 = document.querySelector('h1'); 
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('form');

form.addEventListener('submit', sumarInputValues); 

function sumarInputValues(event) {
    //console.log({event});
    event.preventDefault(); //Para evitar que el último boton de un form recargue la página, tmb se soluciona poniendo type="button" a ese boton
    const sumaInputValues = input1.value + input2.value;
    pResult.innerHTML = "Resultado: " + sumaInputValues
}