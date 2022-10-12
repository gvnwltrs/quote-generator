const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// Show new quote 
function newQuote() {
    // Pick a random quote from apiQuotes array 
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    
    // Check quote length to determine styling 
    if (quote.text.length > 50) {
        quoteText.classList.add('long-quote'); 
    }
    else {
        quoteText.classList.remove('long-quote'); 
    }
    quoteText.textContent = quote.text; 
    
    // Check if author filed is blank and replace with 'Unknown'
    if (quote.author == null) {
        authorText.textContent = "Unknown"; 
    }
    else {
        authorText.textContent = quote.author; 
    }
    
}

// Get quotes from API 
async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        // console.log(apiQuotes);
        newQuote();
    } 
    catch (error) {
        // Catch error here 
    } 
}

// Tweet Quote 
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank'); 
}

// Event Listeners 
newQuoteBtn.addEventListener('click', newQuote); 
twitterBtn.addEventListener('click', tweetQuote);

// On load 
getQuotes();


// Tests 
if (typeof module === 'object') {
    module.exports = { apiQuotes, newQuote, getQuotes, quoteContainer}; 
}