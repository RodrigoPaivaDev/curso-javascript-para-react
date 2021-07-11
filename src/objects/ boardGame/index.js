import cardGame from "../../components/CardGame";

function boardGame(amountCards) {
    const $htmlcardGame = cardGame();
    const $htmlboardGame = $htmlcardGame.repeat(amountCards);

    console.log($htmlboardGame);

    return $htmlboardGame;
}

export default boardGame;