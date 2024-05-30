const alphabet = 'abcdefghijklmnopqrstuvwxyz';
// Assigns the whole alphabet to a variable

function setupGuesses(element, handleGuess) {
// Declares the function taking an element and callback function as parameters
  alphabet.split('').forEach((letter) => {
  // Loops through each letter of alphabet
    const btn = document.createElement('button');
    // Creates a button for each letter
    btn.innerText = letter;
    // Makes the letter appear in each button
    btn.addEventListener('click', (e) => handleGuess(e, letter));
    // Calls handleGuess when a button is clicked
    element.append(btn);
    // Adds the button to the given element
  });
}

export default setupGuesses;
// Exports setupGuesses to use in other modules
