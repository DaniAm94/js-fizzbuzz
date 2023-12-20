# FizzBuzz
## nome repo: js-fizzbuzz
**Consegna:**
- Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
    - per i multipli di 3 stampi “Fizz” al posto del numero.
    - per i multipli di 5 stampi “Buzz”.
    - Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
### Prima di partire a scrivere codice poniamoci qualche domanda:
    1. Come faccio a sapere se un numero è divisibile per un altro?
    2. Abbiamo visto qualcosa di particolare che possiamo usare?
**Come strutturare la consegna**
1. Inizializziamo la repo con git, aggiungiamo un file readme.md vuoto e facciamo il primo push su github
2. Creiamo lo scaffolding di base con la struttura che segue:
    1. js/script.js
    2. css/style.css
    3. index.html
    4. readme.md
3. Poi facciamo il commit e il secondo push
4. Nel file readme.md scomponiamo il problema in passaggi semplici descritti in italiano. Poi facciamo il commit e il terzo push.
5. Procediamo a svolgere l'esercizio in javascript,  facendo un adeguato numero di commit e push.
- **BONUS 1:**
    - Crea un elemento che faccia da contenitore nel DOM e poi riempilo con i tuoi elementi via JS.
    Puoi usare varie tecniche  (template literals, innerHTML, appendecc)
- **BONUS 2:**
    - Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
    Come abbiamo visto puoi  usare varie tecniche (style , className, classList)
    Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.


    ### Scaletta:
    1. Creare un ciclo per iterare tutti i numeri da 1 a 100
    2. Implementare dei controlli per verificare che di volta in volta il numero iterato sia:  
        - Divisibile per 3 e modificarlo con la stringa Fizz
        - Divisibile per 5 e modificarlo con la stringa Buzz
        - Divisibile per entrambi e modificarlo con la stringa FizzBuzz
    3. Stampare il numero/ la stringa in console

    - **Bonus 1**
        - Creo un elemento contenitore nel file HTML (es div)
        - Recupero l'elemento nel file js
        - `Opzione "template literal"`:
            - Creo una variabile stringa che conterrà il tag di apertura di un 'ul';
                sarà posizionata prima del ciclo for.
            - Preparo immediatamente la chiusura del tag 'ul'; posizionata dopo il ciclio for.
            - Inserisco la variabile all'interno dell'elemento HTML tramite proprietà 'innerHTML'.
            - All'interno del ciclo: aggiorno di volta in volta la mia variabile aggiungendo ciò che sarà stampato (numero o stringa corrispettiva) avendo cura di racchiuderlo nel tag 'li'.
    - **Bonus 2**
        - a seguire...
