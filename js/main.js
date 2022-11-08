function parolaPalindroma(text) {
    console.log(text);
    let myText = text.split(''); //inserisco la parola all'interno di un'array
    console.log(myText);

    myText = myText.reverse();//metto al contrario le lettere all'interno del mio array
    console.log(myText);

    let textInverse = myText.join('');//estarggo dall'array la parola e vado a confrontare le due parole
    console.log(textInverse);

    if (text === textInverse) {
        console.log('la parola che hai inserito è palindroma');
    } else {
        console.log('la parola non è palindroma');
    }
}

parolaPalindroma("anna");