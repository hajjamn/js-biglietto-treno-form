/* console.log('ciao mondo') */



//Creo costante del pulsante di invio e annulla

const inviaElement = document.getElementById('submit'); //string
console.log(`Il pulsante di invio è ${inviaElement}`) //string

const clearElement = document.getElementById('clear')
console.log(`Il pulsante di annulla è ${clearElement}`) //string

// Definisco output element

const outputElement = document.getElementById('output')



// Ascolto il pulasnte di invio

inviaElement.addEventListener('click',
function() {
  console.log(`Il pulsante ${inviaElement} è stato cliccato`)

  // Definisco prezzo base, sconto e prezzoFinale

  let prezzoBase, sconto, prezzoFinale

  //Mostro l-output element
  outputElement.classList.remove('d-none')

  //Salvo costante Età

  const etaElement = document.getElementById("eta") //string
  console.log('Età = ' + etaElement) //string

  //Salvo costante Kilometri

  const kilometraggioElement = document.getElementById("kilometraggio") //string
  console.log('Kilometraggio = ' + kilometraggioElement) //string

  //Salvo costanti nome e cognome

  const nomeElement = document.getElementById("nome") //string
  console.log('Nome = ' + nomeElement) //string

  const cognomeElement = document.getElementById("cognome") //string
  console.log('Cognome = ' + cognomeElement) //string

  
    
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

  const nomeElementOutput = document.querySelector('.output-nome')
  nomeElementOutput.innerHTML = nomeElement.value

  const cognomeElementOutput = document.querySelector('.output-cognome')
  cognomeElementOutput.innerHTML = cognomeElement.value

  const prezzoBaseElementOutput = document.querySelector('.output-prezzo-base')
  prezzoBaseElementOutput.innerHTML = prezzoBase  + '€'

  const scontoElementOutput = document.querySelector('.output-sconto')
  scontoElementOutput.innerHTML = sconto + '€'

  const prezzoFinaleElementOutput = document.querySelector('.output-prezzo-finale')
  prezzoFinaleElementOutput.innerHTML = prezzoFinale + '€'


  }
);
  

/* Pulsante annulla */

clearElement.addEventListener('click',
function() {
  
  outputElement.classList.add('d-none')

  const nomeElement = document.getElementById('nome')
  nomeElement.value = ''

  const cognomeElement = document.getElementById('cognome')
  cognomeElement.value = ''

  const kilometraggioElement = document.getElementById('nome')
  kilometraggioElement.value = ''

  const etaElement = document.getElementById('eta')
  etaElement.value = 'none'
  }
)