

var input = document.querySelector("#userinput")
var form = document.getElementById('form')

form.addEventListener('submit', function(event) {
    event.preventDefault();
    var reverse = input.value.split('').reverse().join('')
    window.alert(reverse)
    change.innerText= reverse
})


