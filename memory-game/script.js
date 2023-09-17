const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

function shuffle(array) {
  let counter = array.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);

    counter--;

    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

function createDivsForColors(colorArray) {
  for (let color of colorArray) {
   
    const newDiv = document.createElement("div");

   
    newDiv.classList.add(color);

    
    newDiv.addEventListener("click", handleCardClick);


    gameContainer.append(newDiv);
  }
}


function handleCardClick(event) {
  
  console.log("you just clicked", event.target.classList.item(0));
  const clickedCard = event.target;
  const alreadyClicked = clickedCard.classList.contains("clicked")
  if (freezeGame || alreadyClicked) {
    return false
  }
  
  clickedCard.style.backgroundColor = clickedCard.classList.item(0);
  clickedCard.classList.add("clicked")
  
  if (cardOne === null) {
    cardOne = clickedCard
  } else if (cardTwo === null) {
    cardTwo = clickedCard 
    freezeGame = true 
  } console.log(cardOne, cardTwo)
  
  if (cardOne && cardTwo) {
    if (cardOne.classList.item(0) === cardTwo.classList.item(0)){
      console.log("Yay! You matched " + cardOne.classList.item(0)); 
      cardOne = null;
      cardTwo = null;
      freezeGame = false;
    } else {
      setTimeout(function(){
        cardOne.style.backgroundColor = "transparent";
        cardTwo.style.backgroundColor = "transparent";
        cardOne.classList.remove("clicked");
        cardTwo.classList.remove("clicked");
        cardOne = null;
        cardTwo = null;
        freezeGame = false;
      }, 2000);
    }
  } 
}

createDivsForColors(shuffledColors);

let cardOne = null
let cardTwo = null 
let freezeGame = false


