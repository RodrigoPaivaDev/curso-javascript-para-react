import playerName from "../../components/PlayerName";
import VsPlayer from "../../components/VsPlayer";
import './style.css';

function ScoreBoard() {
    return /*html*/`
        <header class='score-board'>
            ${playerName("Player1")}
            ${VsPlayer()}
            ${playerName("Player2")}
        </header>
    `;
}

export default ScoreBoard;