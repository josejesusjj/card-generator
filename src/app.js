/* eslint-disable */
import "bootstrap";
import "./style.css";

//window.onload = () => {
//document.querySelector("#btn").addEventListener("click", () => {
//document.querySelector("#numbercard").innerHTML = Numbergenerator();
//});
//};
//let Numbergenerator = () => {let Number = ["A","2","3","4","5","6","7","8","9","10","J", "Q","K"];
//let numberIndex = Math.floor(Math.random() * Number.length);
//return Number[numberIndex];};
window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector(".card").innerHTML = Suitgenerator();
  });
  console.log("I am generating the suit");
};
let Suitgenerator = () => {
  let SuitArray = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  let suitIndex = Math.floor(Math.random() * SuitArray.length);
  let NumberArray = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let numberIndex = Math.floor(Math.random() * NumberArray.length);
  let red = document.querySelector(".suitcard");
  //red.style.color = "red";
  //a partir de aqui hago el proceso usando lets
  let suitSymbol = SuitArray[suitIndex];
  let numberSymbol = NumberArray[numberIndex];
  let suitup = "<span class='topsuit'>" + suitSymbol + "</span>";
  let number = "<h1 id='numbercard' class='number'>" + numberSymbol + "</h1>";
  let suitdown = "<span class='bottomsuit'>" + suitSymbol + "</span>";

  let actualCard = suitup + number + suitdown;
  return actualCard;
};
