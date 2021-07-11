import "./src/components/styles/settings/colors.css";
import "./src/components/styles/generic/reset.css";
import "./src/components/styles/elements/base.css";



import cardGame from "./src/components/CardGame";
import boardGame from "./src/objects/ boardGame";



const $root = document.querySelector('#root');
const $htmlboardGame = boardGame(3);



$root.insertAdjacentHTML('beforeend', $htmlboardGame);
