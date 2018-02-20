const sourceLanguage = 'en'; // Get the language code from here: https://ctrlq.org/code/19899-google-translate-languages#languages
// const targetLanguage = 'de'; // Get the language code from here: https://ctrlq.org/code/19899-google-translate-languages#languages
var rand = ['de', 'fr', 'hi', 'ar', 'cs', 'it', 'ja', 'ko', 'pt', 'ru', 'es', 'zh-CH']
var targetLanguage = rand[Math.floor(Math.random() * rand.length)];
const resultDiv = document.querySelector('section div');
const form = document.querySelector('form');
const resultsSection = document.querySelector('#results');
const language = 'Jang'
    //if targetLanguage = then, then that, else...
resultDiv.style.display = 'none'
form.addEventListener('submit', formSubmitted);

function formSubmitted(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const searchTerm = formData.get('search');

    getSearchResults(searchTerm)
        .then(showResults);
}

function getSearchResults(searchTerm) {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguage}&tl=${targetLanguage}&dt=t&q=${searchTerm}`;
    return fetch(url)
        .then(response => response.json())
        .then(result => {
            const translation = result[0][0][0];
            console.log(translation);
            return translation;
        })
}

function showResults(result) {
    const languageDisplay = document.querySelector('#language');
    console.log(languageDisplay);
    const transDisplay = document.querySelector('#translation')
    resultDiv.style.display = ''
    languageDisplay.textContent = language;
    transDisplay.textContent = result;
}