/*
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array
*/

const cars = [{
    marca: 'bmw',
    modello: 'berlina',
    alimentazione: 'benzina',
}, {
    marca: 'bmw',
    modello: 'cabrio',
    alimentazione: 'disel',
}, {
    marca: 'mercedes',
    modello: 'berlina',
    alimentazione: 'gpl',
}, {
    marca: 'mercedes',
    modello: 'cabrio',
    alimentazione: 'metano',
}, {
    marca: 'tesla',
    modello: 'berlina',
    alimentazione: 'elettrico',
}, {
    marca: 'tesla',
    modello: 'cabrio',
    alimentazione: 'benzina',
}, {
    marca: 'alfa',
    modello: 'berlina',
    alimentazione: 'gpl',
}, {
    marca: 'alfa',
    modello: 'cabrio',
    alimentazione: 'disel',
}, {
    marca: 'audi',
    modello: 'cabrio',
    alimentazione: 'benzina',
}, {
    marca: 'audi',
    modello: 'berlina',
    alimentazione: 'gpl',
}]

//Primo array solo le auto a benzina.
const autoBenzina = cars.filter(car => {
    //console.log(car); // - singolo oggetto.
    //console.log(car.alimentazione); // - loggo la singola proprietà dell'oggetto dell'array cars.
    if (car.alimentazione == 'benzina') {
        return true // - se è vero la salva nell'array autoBenzina.
    }
})
console.log(autoBenzina);

//Secondo array solo le auto a disel.
const autoDisel = cars.filter(car => {
    //console.log(car); // - singolo oggetto.
    //console.log(car.alimentazione); // - loggo la singola proprietà dell'oggetto dell'array cars.
    if (car.alimentazione == 'disel') {
        return true // - se è vero la salva nell'array autoBenzina.
    }
})
console.log(autoDisel);

//Terzo array tutte le auto.
const tutteLeAuto = cars.filter(car => {
    return car.alimentazione !== "Benzina" && car.alimentazione !== "Diesel";

})

console.log(tutteLeAuto);