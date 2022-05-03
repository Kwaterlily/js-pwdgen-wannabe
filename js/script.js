//chiedo all'utente come si chiama, qual è il suo cognome e quae sia il suo colore preferito//
//dai dati ottenuti dall'utente genero una password//

const nome = prompt("Come ti chiami?");

console.log(nome);

const cognome = prompt("Scrivi il tuo cognome");

console.log(cognome);

const colore = prompt("qual è il tuo colore preferito?");

console.log(colore);

document.getElementById("mio_id").innerHTML = `${nome}${cognome}${colore}21` ; 

