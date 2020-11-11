'use strict'

class NewsArticleCard extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
    }

    set article(article) {
        this.root.innerHTML = `
            <style> </style>

            <div class="article">
                <h2> ${article.title} </h2>
                <img src="${article.urlToImage}" />
                <p> ${article.description} </p>
                <p> ${article.publishedAt} </p>
                <p> <a href="${article.url}" target="_blank"> View Full Article </a> </p>
            </div>
        `;
    }
}

customElements.define('news-article-card', NewsArticleCard);