function redirectToPage(buttonId) {
    const buttonMap = {
        "gamerFortressButton": "../client/GamerFortress.html",
        "generalChatButton": "../client/GeneralChat.html",
        "xrAppDevButton": "../client/XRAppDev.html"
    };

    window.location.href = buttonMap[buttonId];
}

const gamerFortressButton = document.getElementById("gamerFortressButton");
const generalChatButton = document.getElementById("generalChatButton");
const xrAppDevButton = document.getElementById("xrAppDevButton");

gamerFortressButton.addEventListener("click", () => redirectToPage("gamerFortressButton"));
generalChatButton.addEventListener("click", () => redirectToPage("generalChatButton"));
xrAppDevButton.addEventListener("click", () => redirectToPage("xrAppDevButton"));