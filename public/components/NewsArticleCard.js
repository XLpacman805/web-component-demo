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
                    max-width: 90vw;
                    max-height: 600px;
                    min-height: 600px;
                }

                h2 {
                    font-family: ${theme.fontFamily};
                    background-color: ${theme.colors.secondary};
                    color: ${theme.colors.secondaryText};
                    margin-bottom: 0rem;
                    padding: 1rem 0rem 1rem 1rem;
                    height: 1rem;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                }

                img {
                    max-width: 600px;
                    width: 100%;
                    height: 300px;
                    object-fit: cover;
                }

                @media only screen and (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.desktop}) {
                    .article {
                        max-width: 600px;
                    }
                }

                @media only screen and (min-width: ${theme.breakpoints.desktop}) {
                    .article {
                        max-width: 30vw;
                    }
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