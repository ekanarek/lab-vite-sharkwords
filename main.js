import './style.css';
import getRandomWord from './src/randomWord.js';
import setSharkImage from './src/sharkImage.js';
import {setupWord, isLetterInWord, revealLetterInWord} from './src/word.js';
import setupGuesses from './src/guess.js';

document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;

const word = getRandomWord();
const sharkImgEl = document.querySelector('#shark-img');

const initSharkwords = () => {
  let numWrong = 0;

  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`);


  setSharkImage(document.querySelector('#shark-img'), numWrong);

  setupWord(document.querySelector('#word-container'), word);

  const handleGuess = (guessEvent, letter) => {
    const button = guessEvent.target;
    button.setAttribute('disabled', true);

    if (isLetterInWord(letter)) {
      revealLetterInWord(letter);
    } else {
      numWrong += 1;
      setSharkImage(sharkImgEl, numWrong);
    };

    if (numWrong === 5) {
      updateStatus('You lose!');
    }

    let isWordComplete = false;
    const letterBoxes = document.querySelectorAll('.letter-box');
    console.log({letterBoxes});
    for (const el of letterBoxes) {
      if (el.innerText === '') {
        console.log('el.innerText', el.innerText);
        isWordComplete = false;
        break;
      } else if (el.innerText !== '') {
         isWordComplete = true;
      }
    }
    console.log(isWordComplete);
    if (isWordComplete) {
      updateStatus('You win!');
    }
  }
    
  setupGuesses(document.querySelector('#letter-buttons'), handleGuess)


};

const updateStatus = (msg) => {
  const gameStatus = document.querySelector('#game-status');
  gameStatus.innerHTML = '';
  gameStatus.innerHTML = msg;
}

initSharkwords();
