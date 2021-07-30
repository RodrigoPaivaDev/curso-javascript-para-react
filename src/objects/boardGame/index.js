import './style.css';
import CardFrontBack from '../../components/CardFrontBack';

function boardGame(amountCards) { /*recebe o parametro declarado la main*/
    const $htmlCardFrontBack = CardFrontBack(); /*guarda a funcao cardGame recebido pelo import*/ 
    const $htmlContent = $htmlCardFrontBack.repeat(amountCards); /*guarda a repeticao dos cards definida pelo parametro amountCards*/


    return /*html*/`
        <section class="board-game">
            ${$htmlContent} 
        </section>
        `;
      
}

export default boardGame;