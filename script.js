var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
// dose not have id
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

// vlidation function
function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    function crossOut() {
        li.classList.toggle("done");
    }
    li.addEventListener("click", crossOut);
    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);
    function deleteListItem() {
        // disapear
        li.classList.add("delete");
    }
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeyPress(event) {
    // 13 : enter
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
}





enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);