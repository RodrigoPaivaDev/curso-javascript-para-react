import cardGame from "../CardGame";
import "./style.css";

function CardFrontBack() {
    window.cardFrontBack = {}; /* cria namespace para evitar problemas com escopo global */
    window.cardFrontBack.handleClick = (event) => {
        const $origin = event.target; /* pega o alvo clicado */
        const $cardFrontBack = $origin.closest('.card-front-back');/* o metodo 'closest' procura o elemento mais proximo com a class informada */

       // if($cardFrontBack.classList.contains('-active')) {
           // $cardFrontBack.classList.remove('-active');
       // }
       // else{

            //$cardFrontBack.classList.add('-active') /* add a class active  */
        //} 

        $cardFrontBack.classList.toggle('-active'); /* faz a msm coisa do codigo acima comentado */

    }

    return /*html*/`
        <article class="card-front-back" onClick="cardFrontBack.handleClick(event)">
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