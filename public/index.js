'use strict';

import { getTopHeadlines } from "./services/newsService.js";
import './components/NewsArticleCard.js';
import './components/Navigation.js';

window.addEventListener('load', () => {
    // Fetch the news 
    getTopHeadlines('us').then(response => response.json())
        .then(data => {;
            // Render the news cards components
            let newsContent = document.createDocumentFragment(); 
            
            data.articles.forEach(article => {
                if (article.title && article.urlToImage && article.description && article.publishedAt && article.url) {
                    const newsArticleCard = document.createElement('news-article-card');
                    newsArticleCard.article = article;
                    newsContent.appendChild(newsArticleCard);
                }
            });

            document.querySelector('main').innerHTML = '';
            document.querySelector('main').appendChild(newsContent);

        })
        .catch(err => console.log(err));
});
