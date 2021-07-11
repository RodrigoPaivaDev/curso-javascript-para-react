import "./src/components/styles/settings/colors.css";
import "./src/components/styles/generic/reset.css";
import "./src/components/styles/elements/base.css";



import cardGame from "./src/components/CardGame";
import boardGame from "./src/objects/ boardGame";
import playerName from "./src/components/PlayerName";



const $root = document.querySelector('#root');




$root.insertAdjacentHTML(
    'beforeend',
    `
        ${playerName("Player1")}
        ${playerName("Player2")}
        ${boardGame(6)}

    `
);
