let word;

function setupWord(element, initWord) {
    word = initWord;

    word.split('').forEach(() => {
        element.insertAdjacentHTML('beforeend', `<div class="letter-box"></div>`);
    });
}

function isLetterInWord(letter) {
    return word.includes(letter);
};

function revealLetterInWord(letter) {
    const letterBox = document.querySelectorAll('.letter-box');
    word.split('').forEach((wordLetter, idx) => {
        if (wordLetter === letter) {
            letterBox[idx].innerHTML = letter;
        }
    })
}

export { setupWord, isLetterInWord, revealLetterInWord };