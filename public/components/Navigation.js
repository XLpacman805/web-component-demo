'use strict';

import theme from './themes/theme.js';

class Navigation extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.innerHTML = `
            <style>            
                nav {
                    width: 100%;
                    background-color: ${theme.colors.primary};
                    color: ${theme.colors.primaryText};
                    padding: 1rem 0rem 1rem 1rem;
                    font-family: ${theme.fontFamily};
                }

                nav a {
                    color: ${theme.colors.primaryAnchor};
                }

                nav p {
                    margin-top: 0rem;
                }

                nav h1 {
                    margin-bottom: 0rem;
                }
            </style>

            <nav>
                <h1>Web Component Demo of a News Feed!</h1>
                <p> News API Provided by: <a href="https://newsapi.org">newsapi.org</a> </p>
            </nav>
        `;
    }
}

customElements.define('navigation-component', Navigation);