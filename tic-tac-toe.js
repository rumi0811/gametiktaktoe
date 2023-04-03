class TicTacToe {
    constructor(selector) {
        this.parrentElement = document.querySelector(selector);

        this.init();
        console.log(selector, this.parrentElement);
    }

    init(){
        this.buildGameUI();
    }





    buildGameUI(){

    //game info
    const gamePlayEl = document.createElement('div');
    gamePlayEl.className = 'game-play';

    //game play
    const gameInfoEl = document.createElement('div');
    gameInfoEl.className = 'game-info'; 


        for (let i = 0; i < 9; i++) {           
            const btn = document.createElement('button');
            btn.className = 'btn-tic-tac-toe';
            gamePlayEl.appendChild(btn);
        }

        this.parrentElement.appendChild(gamePlayEl);
    }
}