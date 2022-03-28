class HangmanCanvas {
  constructor(secretWord) {
    this.secretWord=secretWord;
    /**
     * @type {HTMLCanvasElement}
     */
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    const ctx=canvas.getContext('2d');
    document.body.appendChild(canvas);
  }

  StartGame(){
    this.clear();
    this.createBoard();
  }
  /**
   *  method that should clear the canvas, 
   * so every time we start the game we have a clean one. 
   * This method also should call the next one we will define, the drawLines().
   */
  createBoard() {
    // ... your code goes here
    this.addImage();
    this.drawLines();
    pickWord();
  }


  /**
   * puts image of the hang pole
   */
  addImage(){
    this.img=new Image();
		this.image.src="images\Hangman-0.png";
  }


  /**
   * method that should draw one line for each letter of the secret word. 
   * At this point we know the secret word the user has to guess.
   */
  drawLines() {
    // ... your code goes here
    //head
      if(wrongAttempts=1||wrongAttempts==this.secretWord.length){
      ctx.beginPath();
      ctx.lineWidth=4;
      ctx.arc(500, 270, 30, 0, Math.PI * 2, true);
      ctx.strokeStyle="black";
      ctx.stroke();
      ctx.closePath();
    }else if(wrongAttempts==2||wrongAttempts==this.secretWord.length){
      //spine
      ctx.beginPath();
      ctx.lineWidth=4;
      ctx.moveTo(500, 300);
      ctx.lineTo(500, 400);
      ctx.strokeStyle="black";
      ctx.stroke();
      ctx.closePath();
    }else if(wrongAttempts==3||wrongAttempts==this.secretWord.length){
    //left arm
      ctx.beginPath();
      ctx.lineWidth=4;
      ctx.moveTo(500, 320);
      ctx.lineTo(450, 320);
      ctx.strokeStyle="black";
      ctx.stroke();
      ctx.closePath();
    }else if(wrongAttempts==4||wrongAttempts==this.secretWord.length){
    //right arm
      ctx.beginPath();
      ctx.lineWidth=4;
      ctx.moveTo(500, 320);
      ctx.lineTo(550, 320);
      ctx.strokeStyle="black";
      ctx.stroke();
      ctx.closePath();
    }else if(wrongAttempts==5||wrongAttempts==this.secretWord.length){
      //right leg
      ctx.beginPath();
      ctx.lineWidth=4;
      ctx.moveTo(500, 400);
      ctx.lineTo(450, 480);
      ctx.strokeStyle="black";
      ctx.stroke();
      ctx.closePath();
    }else if(wrongAttempts==6||wrongAttempts==this.secretWord.length){
      //right leg
      ctx.beginPath();
      ctx.lineWidth=4;
      ctx.moveTo(500, 400);
      ctx.lineTo(550, 480);
      ctx.strokeStyle="black";
      ctx.stroke();
      ctx.closePath();
    }
  } 

  /**
   * enters game when "START GAME" button is clicked
   * toggles between start game screen and game screen
   */
  startGameEventListener(){
    document.addEventListener("click", (event) => {
			console.log(event);
			const key = event.key;
      let element=document.getElementsByTagName("body"); 
      element.classList.toggle("start-screen");
      element.classList.toggle("game-screen");
		});
  }

 writeCorrectLetter(index) {
    // ... your code goes here
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }


  /**
   * WINNER SCREEN
   * toggles between game screen and winner screen when game is over and player wins
   */
  winner() {
    // ... your code goes here
    let element=document.getElementsByTagName("body");    
    element.classList.toggle("game-screen");
    element.classList.toggle("winner-screen");
  }

  /**
   * GAME OVER SCREEN
   * toggles between game screen and winner screen when game is over and player looses
   */
  gameOver() {
    // ... your code goes here
    let element=document.getElementsByTagName("body");    
    element.classList.toggle("game-screen");
    element.classList.toggle("game-over-screen");

  }


  clear() {
		this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h);
	}


}
