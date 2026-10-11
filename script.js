confetti({
    particleCount: 90,
    spread: 120,
    origin: { y: 0.8}

});

function changeQuote(category) {
    const current = quotesList[category];
    const randomNumber = Math.floor(Math.random() * current.length);
    
    
    const randomQuote = current[randomNumber];

    document.getElementById("quote").innerText = `"${randomQuote.quote}"`;
    document.getElementById("author").innerText = `- ${randomQuote.author}`;

};

function toggleDarkMode() { 
    document.body.classList.toggle("darkMode");
};