const images = [ // questo è un array 
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
];
let currentImgIndex = 0;

const slideImgEl = document.querySelector(".slide-img");
const dotsContainerEl = document.querySelector(".dots-container");
const btnNext = document.getElementById("slider-btn-next");
const btnPrev = document.getElementById("slider-btn-prev");


//assegno l'src all'immagine 
//anche se ho usato la variabile currentImgIndex, nel momentto in cui modifico
// questa variabile, l'src non si aggiorna da solo.
//dopo aver cambiato currentImgIndex dobbiamo riassegnare l'src all'immagine 

slideImgEl.src = images[ currentImgIndex ];

//Creazioine pallini delle slide
for(let i = 0; i < images.length; i++) {
    //versione con HTML
    // let active = "";

    //se i è 0, sono al primo ciclo, quindi il primo elemeno della mia lista
    // if (i === 0){
    //     active = "active"
    // }

    // dotsContainerEl.innerHTML += `<div class="dot"></div>`;

    // oppure possiamo usare la versione con createElement()
    const dotEl = document.createElement ("div");
    dotEl.classList.add( "dot" );

      // se i è 0, sono al primo ciclo, quindi il primo elemento della mia lista
    if ( i === 0 ) {
        dotEl.classList.add( "active" );
    }

    dotsContainerEl.append( dotEl );
}

//*********************************************** */
//aggiunta degli event listener
btnNext.addEventListener( "click", function (){
    console.log( "Next btn click" );

//PRIMA DI INCREMENTARE currentImgIndex, lo uso per recuperare il pallino attualemnte attivo
// e lo disattivo togliendo la classe active
    const oldDot = document.querySelector( `.dots-container :nth-child(${ currentImgIndex + 1 })`);
    oldDot.classList.remove( "active" );

    //se ora CurrentImgIndex è maggiore dell'ultimo indice disponibile
    //devo fare qualcosa

    //length conta da 1, quindi l'ultimo indice disponibile 
    //sarà sempre length -1.
    const ultimoIndiceDisponibile = images.length -1;

    //se dopo aver incrementato currenImgIndex, questa ha un valore maggiore 
    // dell'ultimo indice valido nel nostro array,
    //sovrascrivo currenImgIndex con un valore valido
    if ( currentImgIndex > ultimoIndiceDisponibile) {
        currentImgIndex = ultimoIndiceDisponibile;
    }

    
    //abbiamo incrementato il contatore per tenere traccia dell'indice attuale 
    currentImgIndex++;
    //una volta fatto quello -aggiorno l'src dell'immagine prendendo dall'array l'elemento 
    //che indice uguale a currentImgIndex
    slideImgEl.src =images [ currentImgIndex ];

    //devo aaggiornare i pallini 
    //recupero da dots-container il figlio uguale all'indice dell'immagine attiva
    //ATTENZIONE :nth-child conta da 1 
    const dot = document.querySelector( `.dots-container :nth-child(${ currentImgIndex + 1 })`);
    dot.classList.add( "active" );
} );

btnPrev.addEventListener( "click", function (){
    console.log( "Prev btn click" );

    //PRIMA DI INCREMENTARE currentImgIndex, lo uso per recuperare il pallino attualemnte attivo
// e lo disattivo togliendo la classe active
const oldDot = document.querySelector( `.dots-container :nth-child(${ currentImgIndex + 1 })`);
oldDot.classList.remove( "active" );


    //decremento il contatore per tenere traccia dell'indice attuale 
    currentImgIndex--;

    //se currentImgIndex è minore di 0, lo reimposto a =
    if ( currentImgIndex < 0 ){
        currentImgIndex =ultimoIndiceDisponibile;
    }
    slideImgEl.src = images[ currentImgIndex ];

        //devo aaggiornare i pallini 
    //recupero da dots-container il figlio uguale all'indice dell'immagine attiva
    //ATTENZIONE :nth-child conta da 1 
    const dot = document.querySelector( `.dots-container :nth-child(${ currentImgIndex + 1 })`);
    dot.classList.add( "active" );
} );
