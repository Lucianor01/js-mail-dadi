/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. 
*/

/* EMAIL */

const listaEmail = ['Luca@esempio.it', 'Maria@esempio.it', 'Marco@esempio.it', 'Sara@esempio.it', 'Mark@esempio.it'];

const input = document.getElementById('formEmail');

const button = document.querySelector('button');

button.addEventListener('click', function () {

    let outPut = document.getElementById('risultato_email');
    outPut.innerHTML = ' ';

    const email = input.value;

    let risultatoEmail = false;
    for (let i = 0; i < listaEmail.length; i++) {
        if (email === listaEmail[i]) {
            risultatoEmail = true;
        }
    }

    if (risultatoEmail == true) {
        outPut.append('Benvenuto!');
    } else {
        outPut.append('Riprova!');
    }

    input.value = '';

});


/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. 
*/


/* DADI */

const buttonDado = document.getElementById('button_dado');

buttonDado.addEventListener('click', function () {

    let utente = Math.floor(Math.random() * 6);

    let ia = Math.floor(Math.random() * 6);

    let message = `Dado Utente = ${utente} Dado ia = ${ia} `;

    const dadi = document.getElementById('dado');

    dadi.innerHTML = message;

    if (utente > ia) {
        dadi.innerHTML += "Vince l'utente!";
    } else if (utente < ia) {
        dadi.innerHTML += "Vince il computer!";
    } else {
        dadi.innerHTML += "Pareggio!";
    }
})