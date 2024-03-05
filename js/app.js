/* console.log('ciao mondo') */

//Salvo costante Età

const etaElement = document.getElementById("eta")
console.log('Età = ' + etaElement)

//Salvo costante Kilometri

const kilometraggioElement = document.getElementById("kilometraggio")
console.log('Kilometraggio = ' + kilometraggioElement)

//Creo costante e ascolto il pulsante invia

const inviaElement = document.querySelector('button');
console.log(`Il pulsante di invio è ${inviaElement}`)


inviaElement.addEventListener('click',
function() {
  console.log(`Il pulsante &{inviaElement} è stato cliccato`)
}
);
  
//Calcolo Prezzo Base Biglietto facendo Kilometri x 0.21

let prezzoBase = kilometraggioElement.value * 0.21;
console.log('Prezzo base = ' + prezzoBase)
  
//Calcolo Sconto per Minorenne o Oltre i 65 anni, altrimenti lo fisso per 0%

let sconto

if (etaElement.value <= 18) {
  sconto = prezzoBase * 0.2;
  console.log('Sconto = ' + sconto)
} else if (etaElement.value >= 65) {
  sconto = prezzoBase * 0.4;
  console.log('Sconto = ' + sconto)
} else {
  sconto = 0;
}

// Calcolo prezzo finale facendo prezzoBase - sconto

let prezzoFinale = prezzoBase - sconto;
console.log('Prezzo finale = ' + prezzoFinale.toFixed(2));