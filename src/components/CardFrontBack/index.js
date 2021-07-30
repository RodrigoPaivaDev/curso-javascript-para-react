import cardGame from "../CardGame";

function CardFrontBack() {
    return /*html*/`
        <article class="card-front-back">
            ${cardGame()}
            ${cardGame()}
        </article>
    `;
}

export default CardFrontBack;