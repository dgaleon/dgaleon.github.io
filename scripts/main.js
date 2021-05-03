let myImage = document.querySelector("img");

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ff.png') {
        myImage.setAttribute('src','images/ff2.png');
    } else {
        myImage.setAttribute('src','images/ff.png');
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your name sir.");
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla is the best bruh, " + myName;
    }
}


if(!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla is fire bruh, " + storedName;
}

myButton.onclick = function() {
    setUserName();
}