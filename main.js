import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";



import boardGame from "./src/objects/boardGame";
import ScoreBoard from "./src/objects/ScoreBoard";




const $root = document.querySelector('#root');




$root.insertAdjacentHTML(
    'beforeend',
    `
        ${ScoreBoard()}
        ${boardGame(6)} 

    `
);
