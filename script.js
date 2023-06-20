
var score;
var duration = 25;
var startTime;
var ended = true;
var clicks;
var startTimestamp;
let computerPencilHeight = 0;
let computerPencilInterval;
var finishLinePosition = 500;

var timerTxt = document.getElementById("timer");
var scoreTxt = document.getElementById("score");
var clicksTxt = document.getElementById("clicks");
var goButton = document.getElementById("goButton");
var clickArea = document.getElementById("clickArea");
var skillValue = document.getElementById("skillValue")
var playerPencil = document.getElementById("playerPencil")
var cpuPencil = document.getElementById("cpuPencil")

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
        handleClick();
        startComputerPencil();
    }
});

function handleClick() {
    if (!startTimestamp) {
      startTimestamp = performance.now();
      skillValue.style.transform = 'scaleY(0)';
      requestAnimationFrame(updateGauge);
    }
    
    clicks++;
  }
  
  function updateGauge(timestamp) {
    const elapsedTime = timestamp - startTimestamp;
    const scale = Math.min(elapsedTime / 2000, 1);
    skillValue.style.transform = `scaleY(${scale})`;
    
    if (scale < 1) {
      requestAnimationFrame(updateGauge);
    } else {
      const clicksPerTwoSeconds = Math.round((clicks / elapsedTime) * 1000);
      startTimestamp = null;
      clicks = 0;
      skillValue.style.transform = 'scaleY(0)';
    }
  }
   
// Function to hide the splash page
function hideSplashPage() {
    splashPage.style.display = 'none';
}

function startComputerPencil() {
    if (computerPencilInterval) {
      clearInterval(computerPencilInterval);
    }
  
    computerPencilInterval = setInterval(function() {
      computerPencilHeight += 2;
      cpuPencil.style.height = computerPencilHeight + "px";
  
      if (computerPencilHeight >= finishLinePosition) {
        clearInterval(computerPencilInterval);
        loseGame(); // Define the loseGame() function according to your requirements
      }
    }, 100);
  }