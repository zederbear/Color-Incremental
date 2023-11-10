var gameData = {
    red: 0,
    green: 0,
    blue: 0,
    yellow: 0,
    magenta: 0,
    cyan: 0,
    white: 0
}

function getRed() {
    gameData.red++
    document.getElementById("red-amount").innerHTML = gameData.red
}