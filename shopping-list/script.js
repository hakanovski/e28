let app = new Vue({
    el: '#app',
    data: {
        newItem: '',
        items: [],
        // Initial page load da items dogal olarak bos bu yuzden false returnu kullaniyoruz
        haveItems: false,
    }

})