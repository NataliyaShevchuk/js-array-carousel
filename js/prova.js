//********************** BRIEF DI PROVA****************************
document.querySelectorAll(".carousel").forEach(carousel => {
    const items = document.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from( items, () => {
        return `<span class="carousel__button"></span>`;
    });

    //we inser the buttons
    // the .join gonna connect every carousel__button join
    carousel.insertAdjacentHTML("beforeend" , `
        <div class="carousel__nav"> 
            ${ buttonsHtml.join( " " ) } 
        </div>
    `);

    const buttons = document.querySelectorAll(".carousel__button");
    buttons.forEach((button, i ) => {
        button.addEventListener("click", () => {
            //unselect all the items
            items.forEach( item => item.classList.remove("carousel__item__selected"));
            buttons.forEach( button => button.classList.remove("carousel__item__selected"));

            items[i].classList.add("carousel__item__selected");
            button.classList.add("carousel__item__selected");
        });
    });
    //select the first item on the page load
    items[0].classList.add("carousel__item__selected");
    button[0].classList.add("carousel__item__selected");
});