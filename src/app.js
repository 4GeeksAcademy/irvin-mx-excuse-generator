import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const outPutExcuseArray = []
  let outputString = ""

  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  function randomNumberGenerator(array){
    return Math.floor(Math.random()*array.length)
  }

  //This code below I think I can improve with a for loop in the future/start
  let whoRandomChoiceWiner = who[randomNumberGenerator(who)]
  let actionRandomChoiceWiner = action[randomNumberGenerator(action)]
  let whatoRandomChoiceWiner = what[randomNumberGenerator(what)]
  let whenRandomChoiceWiner = when[randomNumberGenerator(when)]

  //Push answer to new array
  outPutExcuseArray.push(whoRandomChoiceWiner)
  outPutExcuseArray.push(actionRandomChoiceWiner)
  outPutExcuseArray.push(whatoRandomChoiceWiner)
  outPutExcuseArray.push(whenRandomChoiceWiner)//This code below I think I can improve with a for loop in the future/end

  outputString = outPutExcuseArray.join(" ")

  // I need to create the h1 element in the DOM
  let heading = document.createElement("h1")

  heading.innerText = outputString

  const targetDiv = document.getElementById("randomDivContainer")

  //Place the element with the excuse in the DOM, inside the heading tag
  targetDiv.appendChild(heading)

};
