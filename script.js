const noBtn = document.getElementById("noBtn")
const close = document.getElementById("close")
const message = document.getElementById("message")

message.style.display = 'none'

function lovemsg() {
    if(message.style.display === "none"){
        message.style.display       = "flex"
    } else {
        message.style.display = "none"
    }
}

noBtn.addEventListener("click", lovemsg);
close.addEventListener("click", lovemsg);