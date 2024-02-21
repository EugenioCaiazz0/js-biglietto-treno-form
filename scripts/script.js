
/*const kilometriViaggio = parseInt(prompt("Inserire lunghezza tragitto"));

console.log(kilometriViaggio);

const etaPasseggero = parseInt(prompt("Scrivere la propria età"));

console.log(etaPasseggero);*/

let passengerID;
let travelDistance;
const costoKm = 0.21;
let costoViaggio = 1;
let etaPasseggero;

function getID() {
    const inputValue = document.getElementById('nameSurnamePassenger').value;
    passengerID = inputValue;
    console.log(passengerID);
}

function getDistance() {
    const inputValue = document.getElementById('travelDistance').value;
    travelDistance = inputValue;
    console.log(travelDistance);
}

function youngPassengerF() {
    etaPasseggero = 1;
}

function averagePassengerF() {
    etaPasseggero = 2;
}

function oldPassengerF() {
    etaPasseggero = 3;
}

if (etaPasseggero == 1) {
    costoViaggio = kilometriViaggio * 0.21 * 0.80;
} 
else if (etaPasseggero == 2) {
    costoViaggio = kilometriViaggio * 0.21;
}
else if(etaPasseggero == 3) {
    costoViaggio = kilometriViaggio * 0.21 * 0.60;
}

if (Number.isNaN(costoViaggio)) {
    alert("Errore con l'inserimento dei dati");
}

const costoViaggioFixed = costoViaggio.toFixed(2);

console.log(costoViaggioFixed)
/*CALCOLATO COSTO VIAGGIO*/
