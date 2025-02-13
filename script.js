function showLoveMessage() {
    document.getElementById("responseMessage").innerText = "Dinner tomorrow at 8:15 <3";
    document.getElementById("responseMessage").classList.remove("hidden");
}

function moveNoButton() {
    let button = document.getElementById("noButton");
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}
