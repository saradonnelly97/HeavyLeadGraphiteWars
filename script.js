//let playerPencilHeight = 0;
//let computerPencilHeight = 0;
//let computerPencilInterval;

// Wait for DOMContentLoaded event to ensure all elements are available in the DOM
//window.addEventListener('DOMContentLoaded', function () {
    // Get references to DOM elements
//playerPencil = document.getElementById('playerPencil');
//extendButton = document.getElementById('extendButton');
//splashPage = document.getElementById('splashPage');
//computerPencil = document.getElementById('cpuPencil');

    // Add event listener to extend button
//extendButton.addEventListener('click', extendPlayerPencil);

    // Start the computer pencil animation
//startComputerPencil();
//});

// Function to extend the player pencil
//function extendPlayerPencil() {
//    let currentHeight = parseInt(playerPencil.style.height) || 0;
//    playerPencil.style.height = (currentHeight + 5) + 'px';

//    if (currentHeight >= finishLinePosition) {
//        winGame();
//    }
//}

// Function to start the computer pencil animation
//function startComputerPencil() {
//    computerPencilInterval = setInterval(function () {
 //       computerPencilHeight += 2;
 //       computerPencil.style.height = computerPencilHeight + 'px';

//        if (computerPencilHeight >= finishLinePosition) {
//            clearInterval(computerPencilInterval);
//            loseGame();
//        }
//    }, 100);
//}

var score;
var duration = 25;
var startTime;
var ended = true;

var timerTxt = document.getElementById("timer");
var scoreTxt = document.getElementById("score");
var clicksTxt = document.getElementById("clicks");
var goButton = document.getElementById("goButton");
var clickArea = document.getElementById("clickArea");

var show = function(elem) {
    elem.style.display = 'inline';
};

var hide = function(elem) {
    elem.style.display = 'none';
};

function startGame() {
    hide(goButton);
    score = -1;
    ended = false;
    startTime = new Date().getTime();
    var timerId = setInterval(function() {
        var total = (new Date().getTime() - startTime) / 1000;

        if (total < duration) {
            timerTxt.textContent = total.toFixed(2);
        } else {
            ended = true;
            clearInterval(timerId);
            endGame();
        }
    }, 1);
}

function endGame() {
    var clicksBySec = (score / duration).toFixed(2);
    timerTxt.textContent = duration.toFixed(3);
    clicksTxt.textContent = clicksBySec;
    show(goButton);

    setTimeout(function() {
        alert('You made ' + score + ' clicks in ' + duration + ' seconds. It is ' + clicksBySec + ' clicks per second.');
    }, 10);
}

goButton.addEventListener("click", function() {
    startGame();
});

clickArea.addEventListener("click", function() {
    if (!ended) {
        score++;
        scoreTxt.textContent = score;
    }
    animateCircle();
});

// Function to hide the splash page
function hideSplashPage() {
    splashPage.style.display = 'none';
}

// Function to animate the circle based on click speed
function animateCircle() {
    let circle = document.getElementById('circle');
    let now = performance.now();
    let clickTimes = circle.dataset.clickTimes || [];
    clickTimes.push(now);
    circle.dataset.clickTimes = clickTimes;
  
    if (clickTimes.length > 1) {
      let prevClickTime = clickTimes[clickTimes.length - 2];
      let duration = now - prevClickTime;
      circle.style.animationDuration = duration + 'ms';
    }
  
    circle.style.animation = '';
    void circle.offsetWidth; // Restart the animation by triggering a reflow
    circle.style.animation = 'anim 2s linear forwards';
  }