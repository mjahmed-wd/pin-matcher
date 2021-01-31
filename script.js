hideNotification()

function hideNotification() {
    document.getElementById('matched').style.display = "none";
    document.getElementById('tryAgain').style.display = "none";
}

function randomNumber() {
    var generateNumber = Math.random()
    var pin = parseInt(generateNumber * 10000).toString()
    if (pin.length == 4) {
        document.getElementById('generatedPin').value = pin
    } else {
        randomNumber()
    }
    hideNotification()
    input.value = ""
    document.getElementById("submit").disabled = false;
    document.getElementById('actionCount').innerText = count + " " + "try left";

}

var input = document.getElementById('pin-input')
var button = document.getElementsByClassName('button')
for (let i = 0; i < button.length; i++) {
    const element = button[i];
    element.addEventListener('click', function(event) {
        if (event.target.innerText == "<") {
            input.value = input.value.slice(0, -1)
        } else if (event.target.innerText == "C") {
            input.value = ""
        } else {
            input.value += (event.target.innerText)
        }
    })
}

var button = document.getElementById("submit"),
    count = 3;

function submit() {
    if (document.getElementById('pin-input').value == document.getElementById('generatedPin').value && document.getElementById('pin-input').value !== "") {
        hideNotification()
        document.getElementById('matched').style.display = "block";
        document.getElementById('actionCount').style.display = "none";
    } else {
        hideNotification()
        document.getElementById('tryAgain').style.display = "block";
    }
    count = count - 1;
    document.getElementById('actionCount').innerText = count + " " + "try left";
    if (count == 0) {
        document.getElementById("submit").disabled = true;
        document.getElementById('actionCount').innerText = "You have tried 3 times, You can't submit again";
    }
}