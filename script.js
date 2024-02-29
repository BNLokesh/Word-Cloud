let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordsContainerE1 = document.getElementById("wordsContainer");
let addBtnE1 = document.getElementById("addBtn");
let userInputE1 = document.getElementById("userInput");
let errorMsgE1 = document.getElementById("errorMsg");

function createAndAppend(word) {
    let randomFontSize = Math.ceil(Math.random() * 40) + "px";
    let spanElementE1 = document.createElement("span");

    spanElementE1.textContent = word;
    spanElementE1.style.fontSize = randomFontSize;
    spanElementE1.classList.add("m-3");
    wordsContainerE1.appendChild(spanElementE1);




}



for (let word of wordCloud) {
    createAndAppend(word);
}

function newItemAppend() {
    let userInput = userInputE1.value;
    if (userInput !== "") {
        userInputE1.value = "";
        errorMsgE1.textContent = "";
        createAndAppend(userInput);
    } else {
        errorMsgE1.textContent = "Please Enter a word";
    }

}


createAndAppend();
addBtnE1.addEventListener("click", newItemAppend);