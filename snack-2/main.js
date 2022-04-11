//A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
//Es: ['grogu', 'MANDO', 'Luke'] =>  ['Grogu', 'Mando', 'Luke']

const array_minuscole = ['fabio', 'marco', 'gino', 'pino']
const array_maiuscole = [];

array_minuscole.forEach(singleElement => {
    //console.log(singleElement);
    singleElement = singleElement.charAt().toUpperCase() + singleElement.substring(1) // - charAt mi seleziona la lettera, toUpperCase la rende maiuscola, substring mi aggiunge il resto della stringa.
        //console.log(singleElement);
    array_maiuscole.push(singleElement)

});

console.log(array_maiuscole);