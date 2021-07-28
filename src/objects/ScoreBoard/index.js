import playerName from "../../components/PlayerName";

function ScoreBoard() {
    return /*html*/`
        <header class='score-board'>
            ${playerName("Player1")}
            ${playerName("Player2")}
        </header>
    `;
}

export default ScoreBoard;