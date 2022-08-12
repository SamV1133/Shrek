function moveShrek() {
    console.log("button was cliked")
    shrek = document.getElementById("yourmom")
    shrek.style.left = `${Math.floor(Math.random()*(window.innerWidth))-shrek.clientWidth}px`
}