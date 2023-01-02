const h2 = document.getElementById("sign-text");

var button = document.getElementById("button");


function log() {
    h2.innerHTML = "Thanks for signing up!";
    console.log('clicked');
    document.getElementById("sign-up").hidden = true;
}

button.addEventListener("click", log);
