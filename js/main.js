//MILESTONE 1
//Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.
//MILESTONE 2
//Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.
//Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
//Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
//MILESTONE 3
//Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
//BONUS 1:
//Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l’utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
//BONUS 2:
//Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
//Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
//Prima di partire a scrivere codice:
//Non lasciamoci spaventare dalla complessità apparente dell’esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz’ora, così da non perdere di vista il focus dell’esercizio.
//Consigli del giorno:
//1. Costruiamo del carosello una versione statica contenente solamente un’immagine. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come “template”.
//2. Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
//3. Al momento giusto (ihihhi starà a voi capire quale) rispondete a questa domanda: “Quanti cicli servono?”

const images = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
];

let currentImgIndex = 0;

const slideImgEl = document.querySelector(".slide-img");
const slideContainerEl = document.querySelector(".slide-img-container");
const btnNext = document.getElementById("btnNext");
const btnPrev = document.getElementById("btnPrev");

slideImgEl.src = images[ currentImgIndex];

for (let i = 0; i < images.lenght; i++){
    let active = "";
    
    if (active === 0){
        active = "active";
    }
    slideContainerEl.innerHTML += `<img class="slide-img ${ active } "></img>`;
}

for (let i = 0; i < images.lenght; i++){
    //stringa contenente l'url di una singola immagine
    const nowImg = images[ i ];

    const imgEl = document.createElement("img");

    imgEl.src = nowImg;
    imgEl.classList.add("img-fluid", "da-js");

    slideContainerEl.append( imgEl );

}

btnNext.addEventListener("click", function () {
    console.log("next btn click");

    // const oldImg = document.querySelector(`.slide-img-container :nth-child(${currentImgIndex + 1 })`);
    // oldImg.classList.remove( "active" );
    currentImgIndex++;

    const ultimoIndexDisponibile = images.length -1;

    if( currentImgIndex > ultimoIndexDisponibile) {
        currentImgIndex = 0;
    }

    
    slideImgEl.src = images[currentImgIndex];
    
    //riattivo le immagini 
    // const newImg = document.querySelector(`.slide-img-container :nth-child(${ currentImgIndex + 1})`);
    // newImg.classList.add("active");
});

btnPrev.addEventListener("click", function () {
    console.log("Prev btn click");

    // const oldImg = document.querySelector(`.slide-img-container :nth-child(${currentImgIndex + 1 })`);
    // oldImg.classList.remove( "active" );

    currentImgIndex--;

    if( currentImgIndex < 0 ){
        currentImgIndex = ultimoIndexDisponibile;
    }
    slideImgEl.src = images[ currentImgIndex ];

    // const img = document.querySelector(`.slide-img-container :nth-child(${ currentImgIndex + 1})`);
    // img.classList.add("active");
});