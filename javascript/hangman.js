class Hangman {
  constructor(words) {
    /* an array to store all the words that could be given to a player to guess. 
    When the class is instantiated, all the words passed to the constructor as an argument 
    will be saved in this property.*/
    this.words = words;
    // ... your code goes here
    /* here we will store the word that has been picked as a secret word for the current game. 
    Every time a new game starts, a random word from the this.words array needs to be picked 
    as the secret word to be guessed by the player. 
    That is, when the class is instantiated, call the method pickWord() and save the result to the property secretWord. */
    this.secretWord=secretWord; 
    /* an array in which we will store the letters that the user has already picked while trying to guess the secret word. 
    It is important to keep the track of these letters so we can, later on, apply some logic to prevent users from repeating them. */
    this.letters=[];
    /* a string to store the letters user chose and guessed. 
    We will use this to know when the user has won. */
    this.guessedLetters=guessedLetters;
    /* the initial/start value should be 10, 
    and it should decrease every time a user picks a letter that doesn't appear in the word they need to guess. */
    this.errorsLeft=10;
  }

  /**
   * a method that @returns a random word from the array of words.
   */
  pickWord() {
    // ... your code goes here
    const randomWordIndex=Math.floor(Math.random()*this.words.length);
    const randomWord=this.words[randomWordIndex];
    return randomWord;
  }

  /**
   * method that returns true or false 
   * depending on the keyCode of the key pressed by the user: 
   * if the keyCode corresponds to a character from a-z, it @return true, 
   * otherwise, @return false. 
   * You can use keycode.info to find out which codes refer to each key.
   * @param {*} keyCode 
   * @return boolean value
   */
  checkIfLetter(keyCode) {
    // ... your code goes here
    
  }

  /**
   * method that should check 
   * if the letter passed as an argument has already been pressed. 
   * It should return true if it was not or false in the opposite case.
   * @param {*} letter 
   * @return boolean
   */
  checkClickedLetters(letter) {
    // ... your code goes here
  }

  /**
   * method that should add the passed letter to the guessedLetters property. 
   * This could be a good place to check if the user won.
   * @param {*} letter 
   */
  addCorrectLetter(letter) {
    // ... your code goes here
  }

  /**
   * method that should subtract one from the variable errorsLeft. 
   * It also should push this letter in the array of letters if the letter is not there already.
   * @param {*} letter 
   */
  addWrongLetter(letter) {
    // ... your code goes here
  }

  /**
   * method that checks if the user has any errors left. If the number of errors is greater than 0, 
   * the method should return false (the game continues). 
   * In opposite case, if there is no more errors left, the method should return true.
   * @return boolean
   */
  checkGameOver() {
    // ... your code goes here
  }

  /**
   * method that should check if the user won and return the corresponding boolean value
   */
  checkWinner() {
    // ... your code goes here
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
