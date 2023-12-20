// Recupero l'elemento HTML
const container = document.querySelector('.container')

// Inizializzo la variabile che conterrà tutta la stampa
let list = '<ul class="list-unstyled d-flex flex-wrap gap-3">';

// Itero tutti i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {

    //Creo la variabile che contiene quello che verrà stampato
    // Caso banale: verra stampato il numero se questo non è divisibile ne per 3 ne per 5
    let stampa = i;

    //Controllo se è divisibile per 3
    if (!(i % 3)) {
        //Controllo se è contemporaneamente divisibile per 5
        if (!(i % 5)) {
            // Se si stampa FizzBuzz
            stampa = 'FizzBuzz';
        } else {
            // Se non lo è stampa Fizz
            stampa = 'Fizz';
        }
        // Se non è divisibile per 3, controllo che sia divisibile per 5
    } else if (!(i % 5)) {
        // Se si stampa Buzz
        stampa = 'Buzz';
    }

    // Stampa
    console.log(stampa);
    // Aggiorno la lista
    list += `<li>${stampa}</li>`
}


// Preparo la chiusura del tag ul
list += '</ul>';

// Inserisco la lista nell'elemento html
container.innerHTML = list;
