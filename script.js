let apiQuotes = [];

// Show new quote 
function newQuote() {
    // Pick a random quote from apiQuotes array 
    if (apiQuotes != null) {
        const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
        console.log(quote);
        return true; 
    }
    return false;
}

// Get quotes from API 
async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(typeof apiQuotes);
        newQuote();
    } 
    catch (error) {
        // Catch error here 
    } 
}

// On load 
getQuotes();

if (typeof module === 'object') {
    module.exports = { apiQuotes, newQuote, getQuotes }; 
}

// export {apiQuotes}