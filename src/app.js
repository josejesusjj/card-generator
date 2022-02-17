/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#numbercard").innerHTML = Numbergenerator();
  });
  console.log("Hello Rigo from the console! ");
};
let Numbergenerator = () => {
  let Number = [
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
  let numberIndex = Math.floor(Math.random() * Number.length);
  return Number[numberIndex];
};
window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector(".suitcard").innerHTML = Suitgenerator();
  });
  console.log("I am generating the suit");
};
let Suitgenerator = () => {
  let Suit = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  let suitIndex = Math.floor(Math.random() * Suit.length);
  let red = document.querySelector(".suitcard");
  red.style.color = "red";
  return Suit[suitIndex];
};
