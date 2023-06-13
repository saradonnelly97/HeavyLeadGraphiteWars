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

window.addEventListener('DOMContentLoaded', function () {
    playerPencil = document.getElementById('pencil-lead');
    extendButton = document.getElementById('extend-button');
    resetButton = document.getElementById('reset-button');
    winMessage = document.getElementById('win-message');
    splashPage = document.getElementById('splashPage');
    computerPencil = document.getElementById('computer-pencil');

    extendButton.addEventListener('click', function () {
        let currentHeight = parseInt(playerPencil.style.height) || 0;
        playerPencil.style.height = (currentHeight + 5) + 'px';

        if (currentHeight >= finishLinePosition) {
            winGame();
        }
    });

    resetButton.addEventListener('click', function () {
        resetGame();
    });

    startComputerPencil();
});

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

function winGame() {
    playerPencil.style.height = finishLinePosition + 'px';
    extendButton.style.visibility = 'hidden';
    winMessage.style.display = 'block';

    setTimeout(function () {
        resetButton.style.visibility = 'visible';
        resetButton.style.display = 'block';
    }, 3000);
}

function loseGame() {
    extendButton.style.visibility = 'hidden';
    resetButton.style.visibility = 'visible';
    resetButton.style.display = 'block';
}

function resetGame() {
    playerPencil.style.height = '3px';
    computerPencil.style.height = '3px';
    resetButton.style.visibility = 'hidden';
    extendButton.style.visibility = 'visible';
    winMessage.style.display = 'none';
    playerPencilHeight = 0;
    computerPencilHeight = 0;
    clearInterval(computerPencilInterval);
    startComputerPencil(); // Start computer-pencil again
}

function hideSplashPage() {
    splashPage.style.display = 'none';
}
