import './style.css';

function cardGame(icon = "alura-pixel", alt="Logo da Alura") { /* caso nao passe nenhum paramentro recebe oq ta atribuindo */
    return /*html*/`
        <article class='card-game'>
            <img src="src/components/images/${icon}.png" alt="${alt}"/>
        </article>
    `;

}

export default cardGame;