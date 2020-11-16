'use strict'
import theme from './themes/theme.js';

class NewsArticleCard extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
    }

    set article(article) {
        this.root.innerHTML = `
            <style> 
                .article {
                    background-color: white;
                }

                h2 {
                    font-family: ${theme.fontFamily};
                    background-color: ${theme.colors.secondary};
                    color: ${theme.colors.secondaryText};
                    margin-bottom: 0rem;
                    padding: 1rem 0rem 1rem 1rem;
                }

                img {
                    width:100%;
                    height: auto;
                }

            </style>

            <div class="article">
                <h2> ${article.title} </h2>
                <img src="${article.urlToImage}" />
                <div class="description">
                    <p> ${article.description} </p>
                    <p> ${article.publishedAt} </p>
                    <p> <a href="${article.url}" target="_blank"> View Full Article </a> </p>
                </div>
            </div>
        `;
    }
}

customElements.define('news-article-card', NewsArticleCard);