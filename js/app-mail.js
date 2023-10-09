// - Dichiarare una variabile array

const mailAddresses = [
    "pincopallo.67@gmail.com",
    "mailrandom@alice.com",
    "nome.cognome@hotmail.com",
    "peter.parker@domain.com",
    "pippopluto@gmail.com"
];
console.log(mailAddresses);

// - Chiedere la mail dell'utente

const userMail = prompt("inserisci la tua mail");

// - Verificare che la mail sia nel nel nostro database
    // - Dichiarare una variabile che determini la lunghezza dell'array
const arrayLength = mailAddresses.length;
console.log(arrayLength);

let message = "mail errata";

    // - Inizializzare un ciclo per verificare se la mail inserita corrisponde o no al nostro array
for (i = 0; i < arrayLength; i++) {
    const currentMail = mailAddresses[i]
    console.log(i, currentMail)
    // se la user mail è uguale a una delle mail nel ciclo
    if (userMail === currentMail) {
        message = "mail corretta"
    } else{

    }
}


// - Generare un messaggio appropriato in base alla verifica
console.log(message)
const messageDOMElement = document.getElementById("message")
messageDOMElement.innerHTML = message