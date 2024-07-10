//Selecting Popup box popup Overplay button
var popupoverplay = document.querySelector(".popup-overplay");
var popupbox = document.querySelector(".popup-box");
var addpopupbtn = document.getElementById("add-popup-button");


addpopupbtn.addEventListener("click", function(){
    popupoverplay.style.display = "block";
    popupbox.style.display = "block";
})


//Select Add & Cancel button

var cancelbtn = document.getElementById("cancel");

cancelbtn.addEventListener("click", function(event){
    event.preventDefault();
    popupoverplay.style.display = "none";
    popupbox.style.display = "none";
})


//Select container,addbtn, title-input, title-description-input
var containers = document.querySelector(".container");
var addBtn = document.getElementById("addbtn");
var titleInput = document.getElementById("title-input");
var titleDescriptionInput = document.getElementById("title-description-input");


addBtn.addEventListener("click", function(event){
    event.preventDefault(event);
    var div = document.createElement("div")
    div.setAttribute("class", "note-container");
    div.innerHTML = `<h2>${titleInput.value}</h2> <p>${titleDescriptionInput.value}</p>
    <button onclick = "deletenote(event)"> Delete </button>`;

    containers.append(div);
    popupoverplay.style.display = "none";
    popupbox.style.display = "none";
})

function deletenote(event){
    event.target.parentElement.remove()
}
