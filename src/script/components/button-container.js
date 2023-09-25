class ButtonContainer extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.render();
    }

    set clickEvent(e) {
        this._clickEvent = e;
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
            .button-container > button {
                width: 23%;
                cursor: pointer;
                margin-left: auto;
                padding: 16px;
                background-color: cornflowerblue;
                color: white;
                border: 0;
                border-radius: 5px;
                text-transform: uppercase;
            }

            @media screen and (max-width: 393px) {
                .button-container > button {
                    width: 100%;
                    text-align: center;
                }
            }
            </style>

            <div id="button-container" class="button-container">
                <button id="buttonElement">Click Here</button>
            </div>
        `;

        this.querySelector('#buttonElement').addEventListener('click', this._clickEvent)
    }
}
customElements.define('button-container', ButtonContainer);
 