var playerPencil = document.getElementById('pencil-lead');
var extendButton = document.getElementById('extend-button');
var resetButton = document.getElementById('reset-button');
var winMessage = document.getElementById('win-message');
var finishLinePosition = 500;

extendButton.addEventListener('click', function () {
    var currentHeight = parseInt(playerPencil.style.height) || 0;
    playerPencil.style.height = (currentHeight + 5) + 'px';

    if (currentHeight >= finishLinePosition) {
        winGame();
    }
});

resetButton.addEventListener('click', function () {
    resetGame();
});

function winGame() {
    playerPencil.style.height = finishLinePosition + 'px';
    extendButton.style.visibility = 'hidden';
    winMessage.style.display = 'block';

    setTimeout(function () {
        resetButton.style.visibility = 'visible';
        resetButton.style.display = 'block';
    }, 3000);
}

function resetGame() {
    playerPencil.style.height = '3px';
    resetButton.style.visibility = 'hidden';
    extendButton.style.visibility = 'visible';
    winMessage.style.display = 'none';
}
