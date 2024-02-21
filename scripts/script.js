
const kilometriViaggio = parseInt(prompt("Inserire lunghezza tragitto"));

console.log(kilometriViaggio);

const etaPasseggero = parseInt(prompt("Scrivere la propria età"));

console.log(etaPasseggero);

const costoKm = 0.21;

let costoViaggio = 1;

if (etaPasseggero < 19) {
    costoViaggio = kilometriViaggio * 0.21 * 0.80;
} 
else if (etaPasseggero > 65) {
    costoViaggio = kilometriViaggio * 0.21 * 0.60;
}
else {
    costoViaggio = kilometriViaggio * 0.21;
}

if (Number.isNaN(costoViaggio)) {
    alert("Errore con l'inserimento dei dati");
}

/*CALCOLATO COSTO VIAGGIO*/

const costoViaggioFixed = costoViaggio.toFixed(2);


const btn1 = document.querySelector('.btn1');

btn1.addEventListener('click',function(){
    console.log(costoViaggio);
  })