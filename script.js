let score;
let duration = 20;
let startTime;
let ended = true;
let clicks;
let startTimestamp;

let computerPencilHeight = 0;
let computerPencilInterval;
let finishLinePosition = 316;

var timerTxt = document.getElementById("timer");
var scoreTxt = document.getElementById("score");
var clicksTxt = document.getElementById("clicks");
var goButton = document.getElementById("goButton");
var resetButton = document.getElementById("resetButton");
var clickArea = document.getElementById("clickArea");
var skillValue = document.getElementById("skillValue")
var playerPencilLead = document.getElementById("playerPencilLead");
var cpuPencilLead = document.getElementById("cpuPencilLead");
var winMessage = document.getElementById("win-message");
var loseMessage = document.getElementById("lose-message");

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

function winGame() {
    playerPencilLead.style.height = finishLinePosition + 'px';
    winMessage.style.display = 'block';

    setTimeout(function () {
        resetButton.style.visibility = 'visible';
        resetButton.style.display = 'block';
    }, 3000);
}

function loseGame() {
    cpuPencilLead.style.height = finishLinePosition + 'px';
    loseMessage.style.display = 'block';

    setTimeout(function () {
        resetButton.style.visibility = 'visible';
        resetButton.style.display = 'block';
    }, 3000);
}

resetButton.addEventListener('click', function () {
    resetGame();
});

function resetGame() {
    playerPencilLead.style.height = '3px';
    cpuPencilLead.style.height = '3px';
    resetButton.style.visibility = 'hidden';
    winMessage.style.display = 'none';
    loseMessage.style.display = 'none';
    computerPencilHeight = 0;  
    clearInterval(computerPencilInterval);
    startComputerPencil();
    startGame();
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
        startPlayerPencil();
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
  
function startComputerPencil() {
    if (computerPencilInterval) {
      clearInterval(computerPencilInterval);
    }
  
    computerPencilInterval = setInterval(function() {
      computerPencilHeight += 2;
      cpuPencilLead.style.height = computerPencilHeight + "px";
  
      if (computerPencilHeight >= finishLinePosition) {
        clearInterval(computerPencilInterval);
        loseGame(); // Define the loseGame() function according to your requirements
      }
    }, 100);
  }

function startPlayerPencil() {
    let currentHeight = parseInt(playerPencilLead.style.height) || 0;
    playerPencilLead.style.height = (currentHeight + 5) + 'px';

    if (currentHeight >= finishLinePosition) {
        winGame();
    }
}

function trackClicksPerSecond() {
    let clicks = 0;
    let timerId;

    function startTimer() {
        clicks = 0; 
        timerId = setInterval(resetClicks, 1000);
    }

    function resetClicks() {
        console.log('clicks per second: ', clicks),
        clicks = 0
    }
    function trackClick() { 
        clicks++;
    }
    const trackedElement = document.getElementById('clickArea');
    trackedElement.addEventListener('click', trackClick);
    startTimer();
}
trackClicksPerSecond();


function startMusic() {
  music.play();
}
function startMuusic() {
    music2.play();
}
function startMuuusic() {
    music3.play();
}


function hideSplashPage() {
  var splashPage = document.getElementById("splashPage");
  splashPage.style.display = "none";
}
function returnToTitle() {
    var splashPage = document.getElementById("splashPage");
    var instructionManual = document.getElementById("instructionManual");
    instructionManual.style.zIndex = "1";

}  
function hideInstructionManual() {
    var instructionManual = document.getElementById("instructionManual");
    instructionManual.style.display = "none";
  }

function toggleInstructionManual() {
  var instructionManual = document.getElementById("instructionManual");
  
  if (instructionManual.style.zIndex === "1") {
    instructionManual.style.zIndex = "4";
  } else {
    instructionManual.style.zIndex = "1";
  }
}
