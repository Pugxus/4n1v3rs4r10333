const giftBox = document.getElementById("giftBox");
const openBtn = document.getElementById("openBtn");
const backBtn = document.getElementById("backBtn");
const effectsContainer = document.getElementById("effectsContainer");

let opened = false;

openBtn.addEventListener("click", () => {

    if (opened) return;

    opened = true;

    giftBox.classList.add("shake");

    createSparkles();
    createHearts();

    setTimeout(() => {
        giftBox.classList.remove("shake");
        giftBox.classList.add("open");

        createSparkles();
        createHearts();

        openBtn.classList.add("hidden");
        backBtn.classList.remove("hidden");

    }, 900);
});

backBtn.addEventListener("click", () => {

    giftBox.classList.remove("open");

    backBtn.classList.add("hidden");

    setTimeout(() => {
        openBtn.classList.remove("hidden");
        opened = false;
    }, 700);

});

function createHearts() {

    for (let i = 0; i < 25; i++) {

        const heart = document.createElement("div");

        heart.classList.add("heart");
        heart.innerHTML = Math.random() > 0.5 ? "🩵" : "❤️";

        heart.style.left =
            window.innerWidth / 2 +
            (Math.random() * 250 - 125) +
            "px";

        heart.style.top =
            window.innerHeight * 0.55 +
            "px";

        heart.style.animationDuration =
            (2 + Math.random() * 2) + "s";

        effectsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
}

function createSparkles() {

    for (let i = 0; i < 50; i++) {

        const sparkle = document.createElement("div");

        sparkle.classList.add("sparkle");

        sparkle.style.left =
            window.innerWidth / 2 +
            (Math.random() * 280 - 140) +
            "px";

        sparkle.style.top =
            window.innerHeight * 0.55 +
            "px";

        sparkle.style.animationDuration =
            (1 + Math.random()) + "s";

        effectsContainer.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 2200);
    }
}

/*
==================================================
CUSTOMIZABLE LOVE MESSAGE
==================================================

Edit the text inside the HTML element:

<p id="loveMessage">

Example:

Mi amor, gracias por estos tres años
llenos de felicidad...

==================================================
*/
