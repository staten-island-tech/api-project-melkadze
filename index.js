import * as myModule from '/modules/my-module.js';



//word class
class  Word {
    constructor(name, definition, grammar, origin, yearCoined, synonyms, url){
        this.name = name;
        this.definition = definition;
        this.grammar = grammar;
        this.origin = origin;
        this.yearCoined = yearCoined;
        this.synonyms = synonyms;
        this.url = url;
    }

    yearsExisting(yearCoined) {
        return new Date().getUTCFullYear() - yearCoined;
    }
}



//UI section: displaying & removing cities, and clearing fields
class UI {

    removeWord(e) {
        if(e.parentElement.classList.contains('display-button')){
            e.parentElement.parentElement.remove();
        }
    }
    
    clearValues() {
        document.getElementById("word-form").reset();
    }

    displayWord(word){
        if (word.name === false || word.definition === false || word.grammar === false || word.origin === false || word.yearCoined === false || word.synonyms == false || word.URL === false) {
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
    const userName = document.querySelector('#name');
    const userDefinition = document.querySelector('#definition');
    const userGrammar = document.querySelector('#grammar');
    const userorigin = document.querySelector('#origin');
    const userYearCoined = document.querySelector('#yearCoined');
    const usersynonyms = document.querySelector('#synonyms');
    const userURL = document.querySelector('#image');

    const word = new Word(userName.value, userDefinition.value, userGrammar.value, userorigin.value, userYearCoined.value, usersynonyms.value, userURL.value);

    const ui = new UI();

    ui.displayWord(word);

    ui.clearValues();

    e.preventDefault();
})

document.querySelector('.display-word').addEventListener('click', function(e){
    const ui = new UI();
    
    ui.removeWord(e.target);

    ui.clearValues();

    e.preventDefault();
})