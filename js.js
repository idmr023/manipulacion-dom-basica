/*Obtener los valores de html desde JS*/
//Los errores evitan que el resto del código se ejecute correctamente

const h1 = document.querySelector('h1'); //Se usa como si fueran celectores css
const parrafito = document.getElementsByClassName('.parrafito'); //Para llamar a clases
const pid = document.getElementById('pid'); //Para llamar id's
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const pResult = document.querySelector('#result');

//console.log(input.value);

//console.log({h1, parrafito});

/*Modificar html*/
//Modificar el html
h1.innerHTML = 'Patito <br> Feo';
h1.innerText = 'Patito <br> Feo'; //Más seguro

//console.log(h1.getAttribute('class')); //Leer atributos de html
h1.setAttribute('class', 'rojo'); //Definir atributos de html

//input.value = "456";

const img = document.createElement('img');
img.setAttribute('src', 'https://images.pexels.com/photos/1447092/pexels-photo-1447092.png?cs=srgb&dl=pexels-thanhhoa-tran-1447092.jpg&fm=jpg');
//console.log(img);

//pid.innerHTML = "";
//pid.appendChild(img);
//pid.replaceWith(img);

/*Escuchar eventos desde JS, método 1*/

function btnOnclick() { 
    const SumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerHTML = "Resultado: " + SumaInputs
}