let myImage = document.querySelector("img");

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/good.png') {
        myImage.setAttribute('src','images/snek.png');
    } else {
        myImage.setAttribute('src','images/good.png');
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
        myHeading.textContent = "Welcome to Billabong Valley, " + myName;
    }
}


if(!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Billabong Valley welcomes you, " + storedName;
}

myButton.onclick = function() {
    setUserName();
}