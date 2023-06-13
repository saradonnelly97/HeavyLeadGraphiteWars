// Declare variables
let playerPencil;
let extendButton;
let resetButton;
let winMessage;
let splashPage;
let finishLinePosition = 500;
let computerPencil;

let playerPencilHeight = 0;
let computerPencilHeight = 0;
let computerPencilInterval;

// Wait for DOMContentLoaded event to ensure all elements are available in the DOM
window.addEventListener('DOMContentLoaded', function () {
    // Get references to DOM elements
    playerPencil = document.getElementById('pencil-lead');
    extendButton = document.getElementById('extend-button');
    resetButton = document.getElementById('reset-button');
    winMessage = document.getElementById('win-message');
    splashPage = document.getElementById('splashPage');
    computerPencil = document.getElementById('computer-pencil');

    // Add event listener to extend button
    extendButton.addEventListener('click', function () {
        let currentHeight = parseInt(playerPencil.style.height) || 0;
        playerPencil.style.height = (currentHeight + 5) + 'px';

        if (currentHeight >= finishLinePosition) {
            winGame();
        }
    });

    // Add event listener to reset button
    resetButton.addEventListener('click', function () {
        resetGame();
    });

    // Start the computer pencil animation
    startComputerPencil();
});

// Function to start the computer pencil animation
function startComputerPencil() {
    computerPencilInterval = setInterval(function () {
        computerPencilHeight += 2;
        computerPencil.style.height = computerPencilHeight + 'px';

        if (computerPencilHeight >= finishLinePosition) {
            clearInterval(computerPencilInterval);
            loseGame();
        }
    }, 100);
}

// Function to handle winning the game
function winGame() {
    playerPencil.style.height = finishLinePosition + 'px';
    extendButton.style.visibility = 'hidden';
    winMessage.style.display = 'block';

    // Show reset button after a delay
    setTimeout(function () {
        resetButton.style.visibility = 'visible';
        resetButton.style.display = 'block';
    }, 3000);
}

// Function to handle losing the game
function loseGame() {
    extendButton.style.visibility = 'hidden';
    resetButton.style.visibility = 'visible';
    resetButton.style.display = 'block';
}

// Function to reset the game
function resetGame() {
    playerPencil.style.height = '3px';
    computerPencil.style.height = '3px';
    resetButton.style.visibility = 'hidden';
    extendButton.style.visibility = 'visible';
    winMessage.style.display = 'none';
    playerPencilHeight = 0;
    computerPencilHeight = 0;
    clearInterval(computerPencilInterval);
    startComputerPencil();
}

// Function to hide the splash page
function hideSplashPage() {
    splashPage.style.display = 'none';
}
