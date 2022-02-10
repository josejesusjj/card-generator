/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#suitcard").innerHTML = Suitgenerator();
  });
  console.log("I am generating the suit");
};
let Suitgenerator = () => {
  let Suit = [
    "hola;",
    "pica",
    "heart",
    "diamond",

  ];
  let suitIndex = Math.floor(Math.random() * Suit.length);
  return Suit[suitIndex];
};
