console.log("Javascript File is Linked")

const lemon= document.querySelector("#lemon");

function logIdlemon() {
    console.log("User clicked on"+ lemon.id)
}

lemon .addEventListener("click", logIdlemon)