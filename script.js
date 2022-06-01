//getting Elements from html
//i will get the screen,the equal,the clear and the rest of the buttons.

let screen = document.querySelector('.screen');
let button = document.querySelectorAll('.btn');
let equal = document.querySelector('.equal');
let clear = document.querySelector('.clear');
console.log(button)

for (let i = 0; i < button.length; i++){
    button[i].addEventListener('click', runEvent)
    function runEvent (){
        let number = button[i].getAttribute('data-num')
        screen.value += number
    }
}

equal.addEventListener('click', function(){
    let result = eval(screen.value)
    screen.value = result
})

clear.addEventListener('click', function(){
    screen.value = " "
})