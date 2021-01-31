// function randomNumber() {
//     var generateNumber = Math.random()
//     console.log(generateNumber)
//     generateNumber = (generateNumber * 10000).toString().split(".")
//     if (generateNumber[0].length == 4) {
//         var random = generateNumber[0]
//         console.log(random, "random no for console log-")
//         return random
//     } else {
//         randomNumber();
//     }
// }
// console.log(randomNumber())
hideNotification()

function hideNotification() {
    document.getElementById('matched').style.display = "none";
    document.getElementById('tryAgain').style.display = "none";
}

function randomNumber() {
    var generateNumber = Math.random()
        // console.log(generateNumber)
    var pin = parseInt(generateNumber * 10000).toString()
    if (pin.length == 4) {
        // console.log("pin", pin.length)
        document.getElementById('generatedPin').value = pin
    } else {
        randomNumber()
    }
    hideNotification()
    input.value = ""
    document.getElementById("submit").disabled = false;
    count = 3
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
    } else {
        hideNotification()
        document.getElementById('tryAgain').style.display = "block";
    }
    count = count - 1;
    document.getElementById('actionCount').innerText = count + " " + "try left";
    console.log("count", count);
    if (count == 0) {
        document.getElementById("submit").disabled = true;
        document.getElementById('actionCount').innerText = "You have tried 3 times, You can't submit again";
    }
}