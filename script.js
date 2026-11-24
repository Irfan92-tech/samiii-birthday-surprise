
// Birthday Surprise Website ❤️

// Secret demo password
const correctPassword = "Otherhalf❤️❤️";

// Unlock the birthday website
function unlock() {

    const enteredPassword =
        document.getElementById("password").value;

    const error =
        document.getElementById("error");

    if (enteredPassword === correctPassword) {

        // Hide password screen
        document.getElementById("lockScreen")
            .classList.add("hidden");

        // Show birthday home page
        document.getElementById("homeScreen")
            .classList.remove("hidden");

        error.textContent = "";

        // Play romantic background music
        const music = document.getElementById("music");

        music.play().catch(() => {
            console.log("Music is not available yet.");
        });

    } else {

        error.textContent =
            "Wrong password, Bubu! Try again ❤️";

    }
}

// Show special birthday message
function showMessage() {

    const message =
        document.getElementById("extraMessage");

    message.classList.remove("hidden");

}

// Open our memories gallery
function openMemories() {

    document.getElementById("homeScreen")
        .classList.add("hidden");

    document.getElementById("memories")
        .classList.remove("hidden");

}

// Open Samiii's special love letter
function openLetter() {

    document.getElementById("memories")
        .classList.add("hidden");

    document.getElementById("letterScreen")
        .classList.remove("hidden");

}

// Return to birthday homepage
function goHome() {

    document.getElementById("memories")
        .classList.add("hidden");

    document.getElementById("letterScreen")
        .classList.add("hidden");

    document.getElementById("homeScreen")
        .classList.remove("hidden");

}
// Open final birthday surprise
function openFinalSurprise() {

    document.getElementById("homeScreen")
        .classList.add("hidden");

    document.getElementById("memories")
        .classList.add("hidden");

    document.getElementById("letterScreen")
        .classList.add("hidden");

    document.getElementById("finalSurprise")
        .classList.remove("hidden");
}

// Open the birthday gift
function openGift() {

    document.getElementById("giftMessage")
        .classList.remove("hidden");

}

