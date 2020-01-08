const levels = [
    new Level('Level 1', 3, 10, 1, 2, 20),
    new Level('Level 2', 5, 10, 2, 2, 15),
    new Level('Level 3', 10, 10, 3, 2, 10),
]

let game = new Game(levels);
game.renderGame();

document.addEventListener('keydown', event => {
    if(event.code == 'Space'){
      if (!game.isRunning()){
        game.play();
      } else {
        game.stop();
      } 
      
    };
    if (event.key == 's'){
      if (game.isRunning()){
        game.stop(); 
      }  
       
    }
    if (event.key == 'r'){
        if (game.isRunning()){
            game.stop();
        }
        game = new Game(levels);
        game.renderGame();
    }
  });