import "./src/components/styles/settings/colors.css";
import "./src/components/styles/generic/reset.css";
import "./src/components/styles/elements/base.css";



import cardGame from "./src/components/CardGame";


const $root = document.querySelector('#root');
const $htmlcardGame = cardGame();


$root.insertAdjacentHTML('beforeend', $htmlcardGame);