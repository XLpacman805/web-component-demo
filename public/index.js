'use strict';

import { getTopHeadlines } from "./services/newsService.js";
import './components/NewsArticleCard.js';

window.addEventListener('load', () => {
    // Fetch the news 
    getTopHeadlines('us').then(response => response.json())
        .then(data => {;
            // Render the news cards components
            let newsContent = document.createDocumentFragment(); 
            
            data.articles.forEach(article => {
                const newsArticleCard = document.createElement('news-article-card');
                newsArticleCard.article = article;
                newsContent.appendChild(newsArticleCard);
            });

            console.log(newsContent);
            document.querySelector('main').appendChild(newsContent);

        })
        .catch(err => console.log(err));
});
