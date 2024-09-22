function redirectToPage(buttonId) {
    const buttonMap = {
        "levelZero1": "https://itch.io/jam/level-zero",
    };

    window.location.href = buttonMap[buttonId];
}

const levelzero1 = document.getElementById("lvlzero1");
levelzero1.addEventListener("click", () => redirectToPage("levelZero1"));