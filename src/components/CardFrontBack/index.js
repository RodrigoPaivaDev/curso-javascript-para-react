import cardGame from "../CardGame";

function CardFrontBack() {
    return /*html*/`
        <article class="card-front-back">
            ${cardGame()}
            ${cardGame('javascript', 'Logo do JavaScript')}
        </article>
    `;
}

export default CardFrontBack;