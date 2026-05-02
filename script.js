const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";
const numbers = "0123456789";
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const allChars = symbols + numbers + letters;

// function to generate password
function generatePassword() {

    let password1 = "";
    let password2 = "";

    for (let i = 0; i < 16; i++) {
        let randomIndex = Math.floor(Math.random() * allChars.length);
        password1 += allChars[randomIndex];
    }

    for (let i = 0; i < 16; i++) {
        let randomIndex = Math.floor(Math.random() * allChars.length);
        password2 += allChars[randomIndex];
    }

    document.getElementById("pass1").textContent = password1;
    document.getElementById("pass2").textContent = password2;
}

// copy + message
function copyText(text) {
    navigator.clipboard.writeText(text);

    let msg = document.getElementById("msg");
    msg.textContent = "Copied!";
    msg.style.display = "block";

    setTimeout(() => {
        msg.style.display = "none";
    }, 1500);
}

// click to copy
document.getElementById("pass1").addEventListener("click", function () {
    if (this.textContent !== "") {
        copyText(this.textContent);
    }
});

document.getElementById("pass2").addEventListener("click", function () {
    if (this.textContent !== "") {
        copyText(this.textContent);
    }
});