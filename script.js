var playerPencil = document.getElementById('pencil-lead');
var extendButton = document.getElementById('extend-button');
var resetButton = document.getElementById('reset-button');
var winMessage = document.getElementById('win-message');
var finishLinePosition = 500;
var computerPencil = document.getElementById('computer-pencil');

var playerPencilHeight = 0;
var computerPencilHeight = 0;
var computerPencilInterval;

extendButton.addEventListener('click', function () {
    var currentHeight = parseInt(playerPencil.style.height) || 0;
    playerPencil.style.height = (currentHeight + 5) + 'px';

    if (currentHeight >= finishLinePosition) {
        winGame();
    }
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

resetButton.addEventListener('click', function () {
    resetGame();
});

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

startComputerPencil();