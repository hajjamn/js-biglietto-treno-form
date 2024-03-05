/* console.log('ciao mondo') */

//Salvo costante Età

const etaElement = document.getElementById("eta") //string
console.log('Età = ' + etaElement) //string

//Salvo costante Kilometri

const kilometraggioElement = document.getElementById("kilometraggio") //string
console.log('Kilometraggio = ' + kilometraggioElement) //string

//Creo costante del pulsante di invio

const inviaElement = document.querySelector('button'); //string
console.log(`Il pulsante di invio è ${inviaElement}`) //string

// Definisco prezzo base, sconto e prezzoFinale

let prezzoBase, sconto, prezzoFinale

// Ascolto il pulasnte di invio

inviaElement.addEventListener('click',
function() {
  console.log(`Il pulsante ${inviaElement} è stato cliccato, i kilometri sono ${kilometraggioElement.value} e l eta è ${etaElement.value}`)
  
  //Calcolo Prezzo Base Biglietto facendo Kilometri x 0.21
  prezzoBase = parseFloat(kilometraggioElement.value) * 0.21;
  console.log('Prezzo base = ' + prezzoBase)

  //Calcolo Sconto per Minorenne o Oltre i 65 anni, altrimenti lo fisso per 0%
  
  
  if (etaElement.value == 'minor') {
    sconto = prezzoBase * 0.2;
    console.log('Sconto = ' + sconto)
  } else if (etaElement.value == 'senior') {
    sconto = prezzoBase * 0.4;
    console.log('Sconto = ' + sconto)
  } else {
    sconto = 0;
  }
  
  // Calcolo prezzo finale facendo prezzoBase - sconto
  
  prezzoFinale = prezzoBase - sconto;
  console.log('Prezzo finale = ' + prezzoFinale.toFixed(2));

  // Stampo tutte le informazioni sulla pagina

  const outputElement = document.querySelector('.output')
  outputElement.innerHTML += `
  <span>Prezzo iniziale: ${prezzoBase}</span>
  <span>Sconto: ${sconto}</span>
  <span>Prezzo finale: ${prezzoFinale}</span>
  `

  }
);
  
  