class HangmanCanvas {
  constructor(secretWord) {
    /**
     * @type {HTMLCanvasElement}
     */
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    const ctx=canvas.getContext('2d');
  }

  /**
   *  method that should clear the canvas, 
   * so every time we start the game we have a clean one. 
   * This method also should call the next one we will define, the drawLines().
   */
  createBoard() {
    // ... your code goes here
    this.clear();
    this.drawLines();
  }

  /**
   * method that should draw one line for each letter of the secret word. 
   * At this point we know the secret word the user has to guess.
   */
  drawLines() {
    // ... your code goes here
    //head
    ctx.beginPath();
    ctx.lineWidth=4;
    ctx.arc(500, 270, 30, 0, Math.PI * 2, true);
    ctx.strokeStyle="black";
    ctx.stroke();
    ctx.closePath();

    //spine
    ctx.beginPath();
    ctx.lineWidth=4;
    ctx.moveTo(500, 300);
    ctx.lineTo(500, 400);
    ctx.strokeStyle="black";
    ctx.stroke();
    ctx.closePath();

    //left arm
    ctx.beginPath();
    ctx.lineWidth=4;
    ctx.moveTo(500, 320);
    ctx.lineTo(450, 320);
    ctx.strokeStyle="black";
    ctx.stroke();
    ctx.closePath();

    //right arm
    ctx.beginPath();
    ctx.lineWidth=4;
    ctx.moveTo(500, 320);
    ctx.lineTo(550, 320);
    ctx.strokeStyle="black";
    ctx.stroke();
    ctx.closePath();

    //right leg
    ctx.beginPath();
    ctx.lineWidth=4;
    ctx.moveTo(500, 400);
    ctx.lineTo(450, 480);
    ctx.strokeStyle="black";
    ctx.stroke();
    ctx.closePath();

    //right leg
    ctx.beginPath();
    ctx.lineWidth=4;
    ctx.moveTo(500, 400);
    ctx.lineTo(550, 480);
    ctx.strokeStyle="black";
    ctx.stroke();
    ctx.closePath();
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

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
