const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let htiPosition;
let timerId = null;
let currentTime = 60;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    });

      let randomSquare = squares[Math.floor(Math.random() * 9)];
      randomSquare.classList.add('mole');

      htiPosition = randomSquare.id
    }

    squares.forEach(square => {
        square.addEventListener('mousedown', () => {
            if (square.id == htiPosition) {
                result++;
                score.textContent = result;
                htiPosition = null;
            }
        });
    });

    function moveMole() {
       timerId = setInterval(randomSquare, 500);
    }

moveMole();

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('GAME OVER🎡: Your Score Was ' + result);
    }
}

let countDownTimerId = setInterval(countDown, 1000);