let score1 = 0;
let score2 = 0;
let homeScore = document.querySelector("#home-score");
let addOne1 = document.querySelector(".add-one1");
let addTwo1 = document.querySelector(".add-two1");
let addThree1 = document.querySelector(".add-three1");

let guestScore = document.querySelector("#guest-score");
let addOne2 = document.querySelector(".add-one2");
let addTwo2 = document.querySelector(".add-two2");
let addThree2 = document.querySelector(".add-three2");

let newGame = document.getElementById("new-game");

//home-score
addOne1.addEventListener("click", function () {
  score1++;
  homeScore.textContent = score1;
});
addTwo1.addEventListener("click", function () {
  score1 += 2;
  homeScore.textContent = score1;
});
addThree1.addEventListener("click", function () {
  score1 += 3;
  homeScore.textContent = score1;
});
//guest score
addOne2.addEventListener("click", function () {
  score2++;
  guestScore.textContent = score2;
});
addTwo2.addEventListener("click", function () {
  score2 += 2;
  guestScore.textContent = score2;
});
addThree2.addEventListener("click", function () {
  score2 += 3;
  guestScore.textContent = score2;
});

//new game
newGame.addEventListener("click", function () {
  score1 = 0;
  score2 = 0;
  homeScore.textContent = score1;
  guestScore.textContent = score2;
});
