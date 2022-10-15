
import fs from 'fs';
import path from 'path';
import { Window } from 'happy-dom';

import { expect, it, describe, vi } from 'vitest';

const htmlDocPath = path.join(process.cwd(), 'index.html');
console.log(htmlDocPath);
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
document.write(htmlDocumentContent);
vi.stubGlobal('document', document);

import {apiQuotes, getQuotes, newQuote, quoteContainer, loader, showLoadingSpinner, removeLoadingSpinner} from '../script.js';
import { quote } from 'shell-quote';

describe('quote generator', () => {
    
    it('should have list declared for api quotes', () => {
        expect(apiQuotes).toStrictEqual([]);
    });

    it('should have a get quotes function defined that sets the api quote array', () => {
        expect(getQuotes()).toBeDefined();
    });
    
    it('should have constant for quote container', () => {
        expect(quoteContainer).toBeDefined();
    });

    it('should have loader for new incoming quotes', () => {
        expect(loader).toBeDefined();
    });

    it('loader function should run loader event', () => {
        expect(showLoadingSpinner()).toBeDefined();
    });
    
    it('loader event should stop and present quote', () => {
        expect(removeLoadingSpinner()).toBeDefined();
    });
   
});
