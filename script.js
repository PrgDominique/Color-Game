let startGame = document.getElementById('startGame')
let color1 = document.getElementById('color1')
let colors = [
    "Yellow",
    "Green",
    "Red",
    "Blue"
]


startGame.addEventListener("click", function(){
    startGame.remove()
    const random = Math.floor(Math.random()*colors.length)
    console.log(random, colors[random])
    color1.innerHTML = colors[random]
  

    let twentySeconds = 20 * 5,
    display = document.querySelector('#time');
    startTimer(twentySeconds, display);
   
})

let yellowBox = document.querySelector('.yellow-box')
let greenBox = document.querySelector('.green-box')
let redBox = document.querySelector('.red-box')
let blueBox = document.querySelector('.blue-box')

yellowBox.addEventListener("click", function(){
    document.getElementById('result').innerHTML = "You Lose! Try Again"
})
greenBox.addEventListener("click", function(){
    document.getElementById('result').innerHTML = "You Win!"
})
redBox.addEventListener("click", function(){
    document.getElementById('result').innerHTML = "You Lose! Try Again"
})
blueBox.addEventListener("click", function(){
    document.getElementById('result').innerHTML = "You Lose! Try Again"
})



//timer

function startTimer(duration, display) {
    let timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 20,10);

        seconds = seconds < 1 ? "2" + seconds : seconds;

        display.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

