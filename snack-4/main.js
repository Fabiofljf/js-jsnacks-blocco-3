//Crea un array di oggetti che rappresentano delle persone. Ogni persona ha un nome, un cognome e un’età.
//Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

const people = [
    { nome: 'fabio', cognome: 'rossi', eta: '30' },
    { nome: 'gino', cognome: 'verdi', eta: '20' },
    { nome: 'pino', cognome: 'bianchi', eta: '40' },
    { nome: 'lillo', cognome: 'neri', eta: '50' },
    { nome: 'marco', cognome: 'gialli', eta: '60' }
]

const person = people.filter(singoloElemento => {
    const person = singoloElemento;
    //console.log(singoloElemento);
    //console.log(person);
    //console.log(person.eta);
    if (person.eta < '50');
    console.log(`ciao ${person.nome} ${person.cognome}, hai anni ${person.eta} puoi guidare`);
    return true;

})

console.log(person);