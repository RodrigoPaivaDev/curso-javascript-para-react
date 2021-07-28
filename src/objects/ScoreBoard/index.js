import playerName from "../../components/PlayerName";
import './style.css';

function ScoreBoard() {
    return /*html*/`
        <header class='score-board'>
            ${playerName("Player1")}
            ${playerName("Player2")}
        </header>
    `;
}

export default ScoreBoard;