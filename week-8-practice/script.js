Vue.component('round-detail', {
    data: function () {
        return {
            deleted: false
        }
    },
    props: {
        // `number` has an expected data type of Number, and it defaults to 0
        number: {
            type: Number,
            default: 0
        },
        // `winner` has an expected data type of String, with no default set
        winner: String,
    },
    template: '#round-detail',
    methods: {

    }
})


let app = new Vue({
    el: '#app',
    data: {
        rounds: [
            { number: 1, winner: 'Player', coin: 'heads', choice: 'heads' },
            { number: 2, winner: 'Player', coin: 'tails', choice: 'tails' },
            { number: 3, winner: 'Computer', coin: 'heads', choice: 'tails' },
        ]
    },
    methods: {
        deleteRound: function (number) {
            function isMatchingRound(round) {
                return round.number != this;
            }
            this.rounds = this.rounds.filter(isMatchingRound, number);
        }
    },
    computed: {

    },
    mounted: function () {

    },
})