'use strict';

import { getTopHeadlines } from "./services/newsService.js";

window.addEventListener('load', () => {
    // Fetch the news 
    getTopHeadlines('us').then(response => {
        console.log(response);
        // Render the news cards components
    })
    .catch(err => console.log(err));
});
