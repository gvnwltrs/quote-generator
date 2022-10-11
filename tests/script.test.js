let quoteGenerator = require('../script.js');
// import { apiQuotes }  from '../script.js'

describe('quote generator', () => {

    test('should have list declared for api quotes', () => {
        expect(quoteGenerator.apiQuotes).toStrictEqual([]);
    });

    test('should have a get quotes function defined that sets the api quote array', () => {
        expect(quoteGenerator.getQuotes()).toBeDefined();
    });
    
    test('should have a new quote function defined that randomly grabs a quote', () => {
        quoteGenerator.getQuotes();
        expect(quoteGenerator.newQuote()).toBeDefined();
    });
   
});