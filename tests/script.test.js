
import fs from 'fs';
import path from 'path';
import { Window } from 'happy-dom'

import {apiQuotes, getQuotes, newQuote} from '../script.js';
import { vi } from 'vitest';

const htmlDocPath = path.join(process.cwd(), '../index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
document.write(htmlDocumentContent);
vi.stubGlobal('document', document);

describe('quote generator', () => {
    
    test('should have list declared for api quotes', () => {
        expect(apiQuotes).toStrictEqual([]);
    });

    test('should have a get quotes function defined that sets the api quote array', () => {
        expect(getQuotes()).toBeDefined();
    });
    
    test('should have a new quote function defined that randomly grabs a quote', () => {
        getQuotes();
        expect(newQuote()).toBeDefined();
    });

    // test('should have constant for quote container', () => {
    //     expect(quoteGenerator.quoteContainer).toBeDefined();
    // })
   
});
