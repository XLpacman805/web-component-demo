'use strict';
import fakeData from './fakeData.js';
const apiKey = '33f1cb89131d4a76b3d4be2d99d7da74';

/**
 * 
 * @param {string} country - The 2-letter ISO 3166-1 code of the country you want to get headlines for.  
 * @returns {promise}
 */
async function getTopHeadlines(country) {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;
    if (window.location.hostname === 'localhost') {
        return await fetch(url);
    } else {
        return new Response(JSON.stringify(fakeData));
    }
}

export { getTopHeadlines }
