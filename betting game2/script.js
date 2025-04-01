

const timerElement = document.getElementById("timer");
const timerBox = document.querySelector(".timer-box");
const winnerPrompt = document.getElementById("winner-prompt");
const betBoxes = document.querySelectorAll(".bet-box");
const startBettingPrompt = document.getElementById("start-betting-prompt");
const stopBettingPrompt = document.getElementById("stop-betting-prompt");
const animationContainer = document.getElementById("animation-container");
const outerBoxes = document.querySelectorAll(".team-box");

let countdown; 
const winningSequence = [1, 6, 0, 7, 4, 5, 2, 3]; // 2nd, 7th, 1st, 8th, 5th, 6th, 3rd, 4th
let sequenceIndex = 0; 


function showPrompt(promptElement, winnerText = "") {
    if (winnerText) {
        promptElement.setAttribute("data-winner", winnerText); 
    }
    promptElement.classList.add("visible"); 
    promptElement.style.animation = "fadeInOut 2s forwards";
    setTimeout(() => {
        promptElement.style.animation = "";
        promptElement.classList.remove("visible"); 
    }, 2000);
}


function startCountdown() {
    countdown = 10; 
    timerElement.textContent = countdown; 


    showPrompt(startBettingPrompt);


    timerBox.classList.add("hidden");

    betBoxes.forEach(box => {
        box.style.display = "flex";
        box.style.backgroundColor = "#ff69b4"; 
        box.style.color = "#fff"; 
    });


    setTimeout(() => {
        timerBox.classList.remove("hidden"); 
        const countdownInterval = setInterval(() => {
            countdown--;
            timerElement.textContent = countdown;


            if (countdown === 0) {
                clearInterval(countdownInterval);


                timerBox.classList.add("hidden");

                showPrompt(stopBettingPrompt);

                setTimeout(() => {
                    startRectangularAnimation(() => {
                        declareWinner();
                        setTimeout(() => {
                            startCountdown();
                        }, 5000);
                    });
                }, 2000); 
            }
        }, 1000); 
    }, 2000); 
}


function startRectangularAnimation(callback) {
    const boxes = [
        ...document.querySelectorAll(".top-row .team-box"), 
        ...document.querySelectorAll(".right-column .team-box"), 
        ...Array.from(document.querySelectorAll(".bottom-row .team-box")).reverse(), 
        ...Array.from(document.querySelectorAll(".left-column .team-box")).reverse(), 
    ];

    let loopCount = 0; 
    let index = 0; 


    boxes.forEach(box => {
        box.style.boxShadow = "inset 0px 0px 15px rgba(255, 105, 180, 0.8)";
    });

    const animationInterval = setInterval(() => {
        if (index > 0) {
            boxes[index - 1].style.boxShadow = "inset 0px 0px 15px rgba(255, 105, 180, 0.8)"; 
        } else if (loopCount > 0) {
            boxes[boxes.length - 1].style.boxShadow = "inset 0px 0px 15px rgba(255, 105, 180, 0.8)"; 
        }

        boxes[index].style.boxShadow = "inset 0px 0px 30px rgba(255, 215, 0, 1)"; 

        index = (index + 1) % boxes.length;


        if (index === 0) {
            loopCount++;
        }

   
        if (loopCount === 2) {
            clearInterval(animationInterval);
            boxes.forEach(box => {
                box.style.boxShadow = "inset 0px 0px 15px rgba(255, 105, 180, 0.8)";
            });
            if (callback) callback();
        }
    }, 200); 
}

function declareWinner() {
    const winnerIndex = winningSequence[sequenceIndex];
    const winningBox = betBoxes[winnerIndex];

    showPrompt(winnerPrompt, winningBox.textContent);
    winningBox.style.backgroundColor = "#ff1493"; 
    winningBox.style.boxShadow = "0px 0px 25px rgba(255, 20, 147, 0.8)"; 

    sequenceIndex = (sequenceIndex + 1) % winningSequence.length; 
}

startCountdown();