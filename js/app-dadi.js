
// - Generare un numero random da 1 a 6 per il giocatore e per il computer
const btnPlayDOMElemnt = document.querySelector(".play").addEventListener('click', function () {


    let minNumber = 1
    const maxNumber = 6


    const comRandomNr = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    const gamblerRandomNr = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    // console.log(comRandomNr, gamblerRandomNr)

    let message = "pareggio"
    // - Confrontare i due risultati
    if (comRandomNr > gamblerRandomNr) {
    message = "computer win"
    } else if (comRandomNr < gamblerRandomNr) {
    message = "you win"
    } 
    // else {
    // message = "parità"
    // }
    console.log(message, comRandomNr, gamblerRandomNr)
    // - Decretare il vincitore
    const resultPlayDOMElement = document.getElementById('result')
    resultPlayDOMElement.innerHTML = message

})