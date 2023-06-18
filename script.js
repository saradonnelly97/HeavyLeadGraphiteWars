let playerPencilHeight = 0;
let computerPencilHeight = 0;
let computerPencilInterval;

// Wait for DOMContentLoaded event to ensure all elements are available in the DOM
window.addEventListener('DOMContentLoaded', function () {
    // Get references to DOM elements
playerPencil = document.getElementById('playerPencil');
extendButton = document.getElementById('extendButton');
splashPage = document.getElementById('splashPage');
computerPencil = document.getElementById('cpuPencil');

    // Add event listener to extend button
extendButton.addEventListener('click', extendPlayerPencil);

    // Start the computer pencil animation
startComputerPencil();
});

// Function to extend the player pencil
function extendPlayerPencil() {
    let currentHeight = parseInt(playerPencil.style.height) || 0;
    playerPencil.style.height = (currentHeight + 5) + 'px';

    if (currentHeight >= finishLinePosition) {
        winGame();
    }
}

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


// Function to hide the splash page
function hideSplashPage() {
    splashPage.style.display = 'none';
}
