var randNumber_1 = Math.floor((Math.random() * 6) + 1);
var randNumber_2 = Math.floor((Math.random() * 6) + 1);

if(randNumber_1 === 1) {
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
} else if(randNumber_1 === 2) {
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
} else if(randNumber_1 === 3) {
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
} else if(randNumber_1 === 4) {
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
} else if(randNumber_1 === 5) {
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
} else if(randNumber_1 === 6) {
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}

if(randNumber_2 === 1) {
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
} else if(randNumber_2 === 2) {
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
} else if(randNumber_2 === 3) {
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
} else if(randNumber_2 === 4) {
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
} else if(randNumber_2 === 5) {
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
} else if(randNumber_2 === 6) {
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}

if(randNumber_1 === randNumber_2) {
    document.querySelector("h2").innerHTML = "Draw"
} else if(randNumber_1 > randNumber_2) {
    document.querySelector("h2").innerHTML = "Player 1 Won"
} else if(randNumber_1 < randNumber_2) {
    document.querySelector("h2").innerHTML = "Player 2 Won"
}