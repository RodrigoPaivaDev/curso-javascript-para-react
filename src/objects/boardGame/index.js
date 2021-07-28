import cardGame from "../../components/CardGame";
import './style.css';


function boardGame(amountCards) { /*recebe o parametro declarado la main*/
    const $htmlcardGame = cardGame(); /*guarda a funcao cardGame recebido pelo import*/ 
    const $htmlContent = $htmlcardGame.repeat(amountCards); /*guarda a repeticao dos cards definida pelo parametro amountCards*/


    return /*html*/`
        <section class="board-game">
            ${$htmlContent} 
        </section>
        `;
      
}

export default boardGame;