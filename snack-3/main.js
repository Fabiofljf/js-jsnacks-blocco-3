//Crea un array di oggetti che rappresentano degli animali. Ogni animale ha un nome, una famiglia e una classe.

const animali = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]

//Crea un nuovo array con la lista dei mammiferi.

const animali_mammiferi = animali.filter(singoloElemento => {
    //console.log(singoloElemento); // singolo oggetto dell'array
    const classeAnimale = singoloElemento.classe; //estrapolo i singoli attributi dagli oggetti
    //console.log(classeAnimale);
    if (classeAnimale == 'mammiferi') {
        return true
    }
})

console.log(animali_mammiferi);