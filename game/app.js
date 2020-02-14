// Declaring my 1st big variable
// I am creating local methods inside main game function
const game = () => {
    // Updating player's score
    let pScore = 0;
    // Updating computer's score
    let cScore = 0;

    // Starting The Game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        // For the intro screen
        const introScreen = document.querySelector(".intro");
        // For game screen
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
            playMatch();
        });
    };

    //Play Match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        // Computer options:
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener("click", function () {
                // Computer Choice
                // Wrapping up the randomizing method with floor for taking up all the long numbers in console and convert them into one single number like 0,1,2
                // https://stackoverflow.com/questions/9453421/how-to-round-float-numbers-in-javascript
                const computerNumber = Math.floor(Math.random() * 3); // Using random function to randomize computer's selection - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
                const computerChoice = computerOptions[computerNumber];
                // I am setting up a matching condition between user's choice and correct image
                compareHands(this.textContent, computerChoice);

                // Image updating after user selection
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
            });
        });
    };
    // Creating a function for score updating after each game play
    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p')
        const computerScore = document.querySelector('.computer-score p')
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    // I am setting up who is winning who is loosing scenarios below
    // I am passing above const "computerChoice"
    const compareHands = (playerChoice, computerChoice) => {
        // Updating the information on the screen
        const winner = document.querySelector('.winner');
        // For tie scenario
        if (playerChoice === computerChoice) {
            winner.textContent = 'It is a tie!';
            // If it is a tie I do not want to run this function anymore and that is why I ended it with return
            return;
        }
        // Rock Scenario
        if (playerChoice === 'rock') {
            // I am creating another condition here because if user selects rock I need to compare it with the computer's choice
            if (computerChoice === 'scissors') {
                winner.textContent = 'Player Wins!'
                // I am also calling above method which is updateScore for updating the score after every play
                // I also need to icrement the score otherwise the updateScore function will be useless. 
                // pScore and cScore numbers at the beggining will be updated after everytime I play.
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer Wins!';
                cScore++;
                updateScore();
                return;
            }
        }
        // Paper Scenario
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Computer Wins!'
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player Wins!';
                pScore++;
                updateScore();
                return;
            }
        }
        // Scissors Scenario
        if (playerChoice === 'scissors') {
            // I am creating another condition here because if user selects rock I need to compare it with the computer's choice
            if (computerChoice === 'rock') {
                winner.textContent = 'Computer Wins!'
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player Wins!';
                pScore++;
                updateScore();
                return;
            }
        }

    }

    startGame();
};


//start the game function
game();
