import cardGame from "../CardGame";
import "./style.css";

function CardFrontBack() {
    return /*html*/`
        <article class="card-front-back">
            <div class="card -front">
                ${cardGame()}
            </div>
            <div class="card -back">
                ${cardGame('javascript', 'Logo do JavaScript')}
            </div>
        </article>
    `;
}

export default CardFrontBack;