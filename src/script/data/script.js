const buttonElement = document.getElementById('buttonElement');
const quotesField = document.querySelector('.quotes-field');

buttonElement.addEventListener('click', function() {
    fetch('https://katanime.vercel.app/api/getrandom')
        .then((response) => response.json())
        .then(responseJson => {
            if (responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderAllQuotes(responseJson.result);
                console.log(responseJson.result);
            }
        })
        .catch(error => {
            showResponseMessage(error);
        });
});

const renderAllQuotes = (quotes) => {
    const quotesField = document.querySelector('.quotes-field');
    quotesField.innerHTML = '';
    quotes.forEach(quote => {
        quotesField.innerHTML += `

        <div class="quotes-field">
            <div class="from-anime">
                <span class="quote-badge">Anime</span>
                <span class="field-value">
                    ${quote.anime}
                </span>
            </div>
            <div class="from-character">
                <span class="quote-badge">Karakter</span>
                <span class="field-value">
                    ${quote.character}
                </span>
            </div>
            <div class="quote-bahasa">
                <span class="quote-badge">Indonesia</span>
                <span class="field-value">
                    ${quote.indo}
                </span>
            </div>  
            <div class="quote-bahasa">
                <span class="quote-badge">English</span>
                <span class="field-value">
                    ${quote.english}
                </span>
            </div>  
        </div>        
        `;
    });
};

const showResponseMessage = (message = 'Check your internet connection') => {
    alert(message);
};