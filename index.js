//UI section: displaying & removing cities, and clearing fields
class UI {
    
    clearValues() {
        document.getElementById("word-form").reset();
    }

    displayWord(word){
        if (wordName === false) {
            alert('Please. The database requires your full effort.');
        } else {
    
        let html = '<div class="display-word"><div class="display-name"> %name% </div> <div class="display-definition"> %definition% </div> <div class="display-grammar">  %grammar% </div> <div class="display-origin"> %origin% </div> <div class="display-synonyms"> %synonyms% </div> <div class="display-yearsExisting"> %yearsExisting% </div> <div class="display-image"> <image src="%url%"> </div><div class="display-button"> <p class="btn">X</p> </div> </div>';

        const display = document.querySelector('.display');
    
        let newHTML = html.replace('%name%', word.name);
        newHTML = newHTML.replace('%realName%', word.realName);
        newHTML = newHTML.replace(' %grammar%', word.grammar);
        newHTML = newHTML.replace('%origin%', word.origin);
        newHTML = newHTML.replace('%synonyms%', word.synonyms);
        newHTML = newHTML.replace('%yearsExisting%', word.yearsExisting(word.yearCoined));
        newHTML = newHTML.replace('%url%', word.url);
        display.insertAdjacentHTML('beforeend', newHTML);
        }
    }
}




document.getElementById('word-form').addEventListener('submit', function(e){
    //get values
    const wordName = document.querySelector('#name');

    const ui = new UI();

    ui.displayWord(wordName);

    ui.clearValues();

    e.preventDefault();
})

document.querySelector('.display-word').addEventListener('click', function(e){
    const ui = new UI();
    
    ui.removeWord(e.target);

    ui.clearValues();

    e.preventDefault();
})