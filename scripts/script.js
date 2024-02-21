
const inputName = document.querySelector('.inputName');
const inputDistance = document.querySelector(`.inputDistance`);
const inputAge = document.querySelector(`.inputAge`);
const costoKm = 0.21;

let costoViaggio;
let scontoInput;
let scontoPrice;
let passengerID;
let travelDistance;
let passengerAge;

const btnPrint = document.querySelector(`.btnPrint`);
const btnAnnulla = document.querySelector(`.btnAnnulla`);

btnPrint.addEventListener('click',function() {
    
    console.log(inputName.value);
    console.log(inputDistance.value);

    passengerID = inputName.value;
    travelDistance = parseInt(inputDistance.value);
    
    scontoInput = inputAge.value;

    if (scontoInput.value == "minor") {
        scontoPrice = 0.80;
    } else if 
        (scontoInput.value == "middleAged") {
        scontoPrice = 1;
    } else {
        scontoPrice = 0.60;
    }

    costoViaggio = travelDistance * scontoPrice * costoKm;

    if (Number.isNaN(costoViaggio)) {
        alert("Errore, selezionare età");
    }

    const costoViaggioFixed = costoViaggio.toFixed(2);

    console.log(costoViaggioFixed);
    /*CALCOLATO COSTO VIAGGIO*/

    document.getElementById('passengerIDPrint').innerHTML = 
    `<h5> ${passengerID} <h5> `;

    document.getElementById(`costoViaggioPrint`).innerHTML =
    `${costoViaggioFixed}&#8364`;

})

btnAnnulla.addEventListener('click',function(){

    inputDistance.value = '';
    inputAge.value = '';
    inputName.value = '';

})
