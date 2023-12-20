// Recupero l'elemento HTML
const container = document.querySelector('.container')
const list = document.createElement('ul');

list.classList.add('list-unstyled', 'd-flex', 'flex-wrap', 'gap-4');
// Itero tutti i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {

    //Creo la variabile che contiene quello che verrà stampato
    // Caso banale: verra stampato il numero se questo non è divisibile ne per 3 ne per 5
    let stampa = i;

    const listItem = document.createElement('li');

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
    console.log(i, stampa);

    listItem.append(stampa);
    list.appendChild(listItem);
}

container.appendChild(list);






