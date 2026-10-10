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