import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  const excuses = ["escusa1","escusa2","escusa3","escusa4","escusa5"]

  let randomExcuseNumber =  Math.floor(Math.random() * excuses.length)

  let randomExcuse = excuses[randomExcuseNumber]

  // I need to create the h1 element in the DOM
  let heading = document.createElement("h1")
  heading.innerText = randomExcuse

  const targetDiv = document.getElementById("randomDivContainer")

  //Place the element with the excuse in the DOM, inside the heading tag
  targetDiv.appendChild(heading)

};
