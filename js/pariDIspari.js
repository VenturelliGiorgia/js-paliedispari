
function numeroRandom(numUtente, pariDispari) {
    const numComputer = Math.floor(Math.random() * 5) + 1;
    console.log(" numero scelto dall'utente: " + numUtente);
    console.log("numero scelto dal computer: " + numComputer);
    let somma = numUtente + numComputer;
    let textPari = "pari";
    let textDispari = "dispari";
    console.log("L'utente pensa che la somma sarà " + pariDispari);
    console.log("la somma dei due numeri è: " + somma);
    if (somma % 2 === 0) {
        if (pariDispari === textPari) {
            console.log("hai vinto!!");
        } else {
            console.log("hai perso!");
        }
        console.log("la somma è pari");
    } else {
        if (pariDispari === textDispari) {
            console.log("hai vinto!!");
        }else{
            console.log("hai perso!");
        }
        console.log("la somma è dispari");
    }
}
const pariDispari = "dispari";
numeroRandom(2, pariDispari);




