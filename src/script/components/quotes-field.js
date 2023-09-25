class QuotesField extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }
    
    render() {
        this.innerHTML = `
            <style>
            .quotes-field {
                margin: 10px 0 25px;
                background-color: #395B64;
                border-radius: 5px;
            }
            
            .quotes-field .quote-badge {
                display: inline-block;
                width: 130px;
                padding: 10px;
                margin: 5px 5px 5px 5px;
                background-color: #FEDB39;
                border-radius: 5px;
            }
            
            .quotes-field .field-value {
                display: inline-block;
                width: 81.3%;
                padding: 10px;
                margin: 5px 0 5px;
                background-color: #A5C9CA;
                border-radius: 5px;
            }

            @media screen and (max-width: 393px) {
                .quotes-field {
                    padding-top: 1px;
                }
                .quotes-field .quote-badge {
                    width: 92.5%;
                    text-align: center;
                    font-size: 12px;
                    margin-left: 10px;
                    padding: 6px;
                }
                .quotes-field .field-value {
                    margin: 5px 10px 5px;
                    width: 92.5%;
                }
            }
            </style>

            <div class="quotes-field"></div>
        `;
    }
}
customElements.define('quotes-field', QuotesField);