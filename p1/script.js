Vue.component('player-weapon', {
    props: ['playerWeapon'],
    template: `
    <div id="preference">
      
      <h2>Choose Your Weapon:</h2>
      
      <section>
        <img src="./media/rock.png" alt="Rock Weapon" style="width:100px;height:120px" @click="$emit('choose', 'rock')" :class="{weaponIs: playerWeapon == 'rock'}" />
        <img src="./media/paper.png" alt="Paper Weapon" style="width:100px;height:120px" @click="$emit('choose', 'paper')" :class="{weaponIs: playerWeapon == 'paper'}" />
        <img src="./media/scissors.png" alt="Scissors Weapon" style="width:100px;height:120px" @click="$emit('choose', 'scissors')" :class="{weaponIs: playerWeapon == 'scissors'}" />
      </section>
      
      <button v-on:click="$emit('fire')" :disabled="!playerWeapon">Fire!</button>

    </div>
  `
});

Vue.component('round-details', {
    props: ['playerWeapon', 'computerWeapon', 'winner'],
    template: `
    <div id="winner" :class="{'happy-end': winner == 'won', 'bad-end': winner == 'lost' }">
      <p>Your Weapon: {{ playerWeapon }}</p>
      <p>Computer's Weapon: {{ computerWeapon }}</p>
      <p>Player {{ winner }} !!!</p>
      <button v-on:click="$emit('new-round')"> New Round! </button>
    </div>
  `
});


Vue.component('score-history', {
    props: ['playerScore', 'computerScore', 'history'],
    template: `
    <div id="logs">
      <div>
        <div>
          <h2>SCORE:</h2>
          <p>Player: {{ playerScore }}</p>
          <p>Computer: {{ computerScore }}</p>
      </div>
      <div>
          <h2>HISTORY:</h2>
          <ul>
            <li v-for="(winner, whoever) in history" :key="whoever">
                Round {{ whoever +1 }}: {{ winner }}
            </li>
          </ul>
      </div>
     </div>
      <button v-on:click="$emit('deleting-all')">Reset</button>
    </div>
  `
});

let app = new Vue({
    el: '#app',
    data: {
        playerWeapon: '',
        computerWeapon: '',
        history: [],
        playerScore: '',
        computerScore: '',
        winner: ''      
    },

    methods: {
        activatePlayerWeapon: function (pref) {
        this.playerWeapon = this.playerWeapon == pref ? '' : pref;
        },
        fireNow: function () {
            const options = ['rock', 'paper', 'scissors'];
            this.computerWeapon = options[Math.floor(Math.random() * options.length)];

          
          // SCENARIOS
          // Creating Paper beats rock sceanrio
          if (this.playerWeapon == 'paper') {
                this.winner = this.computerWeapon == 'rock' ? 'won' : 'lost';
            }
          // Creating Rock beats Scissors sceanrio
          else if (this.playerWeapon == 'rock') {
                this.winner = this.computerWeapon == 'scissors' ? 'won' : 'lost';
            }
          // Creating Scissors beats Paper sceanrio
          else if (this.playerWeapon == 'scissors') {
                this.winner = this.computerWeapon == 'paper' ? 'won' : 'lost';
                }
          // Creating Tied Sceanrio
          if (this.playerWeapon == this.computerWeapon) {
            this.winner = 'tied'
          }
            

            if (this.winner == 'won') {
                this.playerScore++;
                this.history.push('Player Wins!');
            } else if (this.winner == 'lost') {
                this.computerScore++;
                this.history.push('Computer wins!');
            } else {
                this.history.push('Tied!');
            }
        },
        newRound: function () {
            this.playerWeapon = '';
            this.computerWeapon = '';
            this.winner = '';
        },
        deleteAll: function () {
            this.playerScore = 0;
            this.computerScore = 0;
            this.history = [];
        }
    },
});