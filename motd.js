document.addEventListener("DOMContentLoaded", function() {
    // Array of messages
    const messages = [
        "i farted guys",
        "thanks for using website",
        "did you guys know that chatgpt helped me do this lol",
        "say hi to your mom for me",
        // Add more messages as needed
    ];

    // Get the element by ID
    const motdElement = document.getElementById("motd");

    // Select a random message from the array
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];

    // Set the message text
    motdElement.textContent = randomMessage;
