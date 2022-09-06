let scoreHome = document.getElementById("g-score-1")
let scoreGuest = document.getElementById("g-score-2")
let score1 = 0
let score2 = 0
let scorefinal = document.getElementById("scoretoshow")
let progress = document.getElementById("progressBar")

function addHome1() {
    score1 += 1
    scoreHome.textContent = score1

}

function addHome2() {
    score1 += 2
    scoreHome.textContent = score1


}

function addHome3() {
    score1 += 3
    scoreHome.textContent = score1

}

function addGuest1() {
    score2 += 1
    scoreGuest.textContent = score2

}

function addGuest2() {
    score2 += 2
    scoreGuest.textContent = score2


}

function addGuest3() {
    score2 += 3
    scoreGuest.textContent = score2

}

function reset() {
    score1 = 0
    score2 = 0
    scoreGuest.textContent = score2
    scoreHome.textContent = score1

    progress.textContent = 20 + "s"
    counter = 0
    scorefinal.textContent = ""

}

function timesToEnd() {
    var counter = 20
    setInterval(function() {
        counter--

        if (counter >= 0) {
            progress.innerHTML = counter

        }
        if (counter == 0) {
            if (score1 < score2) {
                scorefinal.textContent = "Guest win"
            } else if (score2 < score1) {
                scorefinal.textContent = "Home win"
            } else {
                scorefinal.textContent = "Its a draw"
            }
        }
    }, 1000)

}