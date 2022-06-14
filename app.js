const cartas =['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg',
'17.jpg','18.jpg','19.jpg','20.jpg','21.jpg','22.jpg','23.jpg','24.jpg','25.jpg','26.jpg','27.jpg'];
const btnBarajear = document. querySelector('#btn_iniciar');
const pasarCarta = document. querySelector('#btn_elegir');
const imgCasilla = document.querySelector('.set_card'); 
const baraja = document.querySelector('#cards_baraja');
const casillas = document.querySelector('.card');


// Mostrar cartas al precionar el boton "Iniciar juego"

btnBarajear.addEventListener('click', () => shuffle(cartas));

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    console.log(array)
  
    return array;
  }
  



  // Elegir otra carta al presionar el boton "Elegir otra carta"

  pasarCarta.addEventListener('click', sacarCarta);
 
  function sacarCarta () {
    const cartaSeleccionada = cartas.pop();
    baraja.src = `images/${cartaSeleccionada}`

  }

  
// Marcar casillas 

function marcaCasilla () {
  for( let i = 0; i<casillas.length; i++ ) {
    if(casillas[i] == baraja ) {
      casillas[i].style.backgroundColor = "red";
    } else {
    continue;
  }
}


/* Elección de cartas*/ 


function elegirCarta (numCarta) {
   if(numCarta == 1) {
      document.getElementById('carta_2').style.display = "none"
      document.getElementById('carta_3').style.display = "none"
      document.getElementById('mazo').style.display = "flex"
      document.getElementById('Boton').style.display = "none"
   } else if (numCarta == 2) {
     document.getElementById('carta_1').style.display = "none"
     document.getElementById('carta_3').style.display = "none"
     document.getElementById('mazo').style.display = "flex"
     document.getElementById('BotonDos').style.display = "none"
   } else if (numCarta == 3) {
     document.getElementById('carta_1').style.display = "none"
     document.getElementById('carta_2').style.display = "none"
     document.getElementById('mazo').style.display = "flex"
     document.getElementById('BotonTres').style.display = "none"
   }
};