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

    let isWordComplete = true;
    for (const el of document.querySelectorAll('.letter-box')) {
      if (el.innerText === '') {
        isWordComplete = false;
        break;
      } else {
        
      }
    }
  };

  setupGuesses(document.querySelector('#letter-buttons'), handleGuess)

};


initSharkwords();
