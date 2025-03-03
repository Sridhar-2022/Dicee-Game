document.addEventListener("DOMContentLoaded", function () {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomImageSource1 = "assets/images/dice" + randomNumber1 + ".png";
    var randomImageSource2 = "assets/images/dice" + randomNumber2 + ".png";

    document.querySelector(".img1").setAttribute("src", randomImageSource1);
    document.querySelector(".img2").setAttribute("src", randomImageSource2);

    var heading = document.querySelector("h1");

    if (randomNumber1 > randomNumber2) {
        heading.innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        heading.innerHTML = "Player 2 Wins! 🚩";
    } else {
        heading.innerHTML = "Draw!";
    }
});
