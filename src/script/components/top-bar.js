class TopBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'})
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        :host {
            display: block;
            width: 100%;
            background-color: #395B64;
            color: white;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }
        
        :host h2 {
            display: block;
            padding: 16px;
            width: 58.5%;
            margin: auto;
        }

        @media screen and (max-width: 393px) {
            :host h2 {
                font-size: 16px;
                text-align: center;
            }
        }
          
        </style>

        <h2>Random Anime Quotes</h2>
        `;
    }
}
customElements.define('top-bar', TopBar);