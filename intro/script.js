let app = new Vue ({
    el: '#app',
    data: {
        playerName: '',
        guesses: [],
        // Initially of course we do not have a guess wshen the page loaded, that is why we put null!
        guess: null,
        isAdmin: true
    }
})