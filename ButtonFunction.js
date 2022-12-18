let displayIdea = document.getElementById("button")

function callRandom(){
  displayIdea.textContent = ideas[random]
}

const ideas = ["5 jumping jacks", "Get out of dishes", "Margarita Night", "One smoochie-kiss"];

const random = Math.floor(Math.random() * ideas.length);



