
export class DisplayContorller{
     displayGameDetails(games) {
        let gameDetailsElement = document.getElementById('games-list');
        gameDetailsElement.innerHTML = '';
        if(games.length>1){
            for(let game of games) {
                addGameToPage(game);
            }
        }
        else {
            addGameToPage(games[0])
        }

    }

     addGameToPage(game) {
        var template = document.getElementById("game-card-template").content.cloneNode(true);
        template.querySelector('.card-title').innerText = game.title;
        template.querySelector('.card-text').innerText = game.short_description;
        template.querySelector('.genre').innerText = game.genre;
        template.querySelector('.card-img-top').src = game.thumbnail;
        template.querySelector('.game-url').href = game.game_url;
        document.querySelector('#games-list').appendChild(template);
    }


}
