const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreBoard = {
    player: 0,
    computer: 0
};

// Play Game
function play(e) {
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();

    // console.log(playerChoice, computerChoice);

    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);
}

// Get Computer Choice
function getComputerChoice() {
    const rand = Math.random();
    if(rand < 0.34) {
        return 'rock';
    } else if(rand < 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// Get Winner
function getWinner(p, c){
    if (p === c) {
        return 'مساوی';
    } else if(p === 'rock') {
        if(c === 'paper') {
            return 'کامپیوتر';
        } else {
            return 'بازیکن';
        }
    } else if(p === 'paper') {
        if(c === 'rock') {
            return 'بازیکن';
        } else {
            return 'کامپیوتر';
        }
    } else if(p === 'scissors') {
        if(c === 'rock') {
            return 'کامپیوتر';
        } else {
            return 'بازیکن';
        }
    }
}

// Show Winner
function showWinner(winner, computerChoice) {
    if(winner === 'بازیکن') {
        scoreBoard.player++;
        result.innerHTML = `
            <h1 class="text-win">شما برنده شدید</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>کامپیوتر <strong>${computerChoice}</strong> را انتخاب کرد</p>
        `;
    } else if(winner == 'کامپیوتر') {
        scoreBoard.computer++;
        result.innerHTML = `
            <h1 class="text-lose">شما باختید</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>کامپیوتر <strong>${computerChoice}</strong> را انتخاب کرد</p>
        `;
    } else {
        result.innerHTML = `
            <h1>مساوی شد</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>کامپیوتر <strong>${computerChoice}</strong> را انتخاب کرد</p>
        `;
    }

    // Show Score
    score.innerHTML = `
        <p>بازیکن: ${scoreBoard.player}</p>
        <p>کامپیوتر: ${scoreBoard.computer}</p>
    `;

    modal.style.display = 'block';
}

// Clear Modal
function clearModal(e) {
    if(e.target === modal) {
        modal.style.display = 'none';
    }
}

// Restart Game
function restartGame() {
    scoreBoard.player = 0;
    scoreBoard.computer = 0;
    score.innerHTML = `
        <p>بازیکن: 0</p>
        <p>کامپیوتر: 0</p>
    `;
}

// Event Listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);