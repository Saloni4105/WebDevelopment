// alert("Connected"); //not recommended

// DOM(Document Object Model)- Processed elements in document tree in memory
// DOM Manipulation 
/*
1. get the element
2. event listening
*/

// Example-1
document
.getElementById("changeTextButton")
.addEventListener('click', function (){
    let paragraph = document.getElementById("myParagraph")
    paragraph.textContent = "This Paragraph is changed";

});

// Example-2

document.getElementById("highlightFirstCity")
.addEventListener('click', function(){
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight")
})

// Example-3
document.getElementById("changeOrder")
.addEventListener('click', function(){
    let coffeeType = document.getElementById("coffeeType");
    coffeeType.textContent = "Espresso";
    coffeeType.style.backgroundColor = "blue";
    coffeeType.style.padding = "5px";
});

// Example-4
document.getElementById("addNewItem")
.addEventListener('click', function(){

    let newItem = document.createElement('li')
    newItem.textContent = "Eggs"
    document.getElementById("ShoppingList").appendChild(newItem);
})

// Example-5
document.getElementById("removeLastTask")
.addEventListener('click', function(){
    let taskList = document.getElementById('taskList');
    taskList.lastElementChild.remove();
    // taskList.remove(); it remove all the task
})

// Example-6
document.getElementById("clickMeButton")
.addEventListener('click', function(){
    alert("chaiCode")
})

// Example-7
document.getElementById("teaList")
.addEventListener('click', function(){
    if(event.target && event.target.matches(".teaItem")){
        alert("You selected: "+ event.target.textContent);
    }
})

// Example-8 
document.getElementById("feedbackForm")
.addEventListener('submit', function(event){
    event.preventDefault();
    let feedback = document.getElementById
    ("feedbackInput").value;
    console.log(feedback);
    document.getElementById("feedbackDisplay")
    .textContent = `Feedback is: ${feedback}`;
})

// Example-9
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('domStatus').textContent =
    "DOM fully loaded";
});

// Example-10
document.getElementById("toggleHighlight")
.addEventListener('click', function(){
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle('highlight');
})