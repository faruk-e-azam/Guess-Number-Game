let hideNumber = document.querySelector(".hide--number");
let highScore = document.querySelector(".highscore");
let message = document.querySelector(".message");
let initialScore = document.querySelector(".initial--score");
let checkBtn = document.querySelector(".check--btn");
let clearBtn = document.querySelector(".try--again");

let randomNum = Math.floor(Math.random() * 20) + 1;

function init() {
    initialScore.innerHTML = 20;
    message.innerHTML = 'Start guessing....';
    randomNum = Math.floor(Math.random() * 20) + 1;
    document.getElementById("inp--num").value = '';
}
init();

function reset() {
    init();
}

function decrement() {
    initialScore.innerHTML = Number(initialScore.innerHTML) - 1;
}

function checkNumber() {
    let inputNumber = Number(document.getElementById("inp--num").value);
    if (inputNumber !== randomNum) {
        decrement();
        message.innerHTML = inputNumber > randomNum ? 'Too high!' : 'Too low!';
        if (initialScore.innerHTML == 0) {
            message.innerHTML = `Game over! The number was ${randomNum}.`;
        }
    } else {
        message.innerHTML = "Congratulations, you found the number!";
        hideNumber.innerHTML = randomNum;
        if(Number(highScore.innerHTML) < Number(initialScore.innerHTML) ) {
            highScore.innerHTML = initialScore.innerHTML;
        }
    }
}

checkBtn.addEventListener("click", function () {
    checkNumber();
});

clearBtn.addEventListener('click', function () {
    init();
});
