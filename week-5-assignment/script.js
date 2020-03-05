


let app = new Vue({
    el: '#app',
    data: {
        // Using the provided list of hints in project
        words: [
            ['apple', 'Sometimes red, sometimes delicious'],
            ['washington', 'Rushmore’s left edge'],
            ['pumpkin', 'Halloween’s favorite fruit'],
            ['football', 'Play with your hands or feet, depending on your location']
        ],
        // Others      
        type: 'begin',
        playerName: '',
        result: '',
        correct:'',
        word: '',
        hint: '',
        makingGuess: '',
        enteredWord: '',     
    },
    

    methods: {
        submitGuess: function() {
            this.correct = this.makingGuess == this.word;
            this.result = true;
        },
        launchGame: function() {
            this.type = 'activeGame';
            this.restartGame();
        },
        restartGame: function() {
            this.result = false;
            this.makingGuess = '';
            // Creating loop for after each gameplay with last entered word
            // Randomizing the words
            while(this.word === this.enteredWord) {
                this.option = this.words[Math.floor(Math.random() * this.words.length)];
                // Selecting 1st and 2nd elements of the hint array
                this.word = this.option[0];
                this.hint = this.option[1];
                
            }
            // After guessing correct starting game with different question
            this.enteredWord = this.word;            
        }
    },
    
    computed: {
        scrambledWord: function () {
            let wordScrambled = this.word.split('');
            //  Creating loop for shuffeling
            for (var i = wordScrambled.length - 1; i > 0; i--){
                var j = Math.floor(Math.random() * (i+1));
                var k = wordScrambled[i];
                wordScrambled[i] = wordScrambled[j]
                wordScrambled[j] = k;
                return wordScrambled.join('');
            }       
        }
    },
});