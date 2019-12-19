var buttonGen = document.querySelector("#gen");
var buttonCopy = document.querySelector("#copy");
var passwordLocation = document.querySelector("#password");

var password = "";
//arrays to hold the characters

var special = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("");
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//function that creates a random password and sets it to a variable

function genPass (length, selectedArray, arrayLength) {
    for(var i = 0; i < length; i++) {
        var rand = Math.floor(Math.random()*arrayLength);
        password = password + selectedArray[rand];
    }
}

buttonGen.addEventListener("click", function() {
    var userLength = document.querySelector("#passLength").value;
    var charType = document.querySelector("#passType").value;
    var selectedArray;
    if (charType.toLowerCase() === "special") {selectedArray = special;
    } else if (charType.toLowerCase() === "numeric") {selectedArray = numeric;
    } else if (charType.toLowerCase() === "lowercase") {selectedArray = lowercase;
    } else if (charType.toLowerCase() === "uppercase") {selectedArray = uppercase;
    } else {console.log("Invalid Input");}
    var arrayLength = selectedArray.length;
    var length = parseInt(userLength);
    genPass(length, selectedArray, arrayLength);
    passwordLocation.value = password;
    password = "";
});

buttonCopy.addEventListener("click", function() {
    passwordLocation.focus();
    passwordLocation.select();

    document.execCommand("copy");

    alert("Copy Successful!");
})
