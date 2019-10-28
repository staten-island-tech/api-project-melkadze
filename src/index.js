//City class
class City {
    constructor(name, realName, population, area, founded, url){
        this.name = name;
        this.realName = realName;
        this.population = population;
        this.area = area;
        this.founded = founded;
        this.url = url;
    }

    yearsExisting(founded) {
        return new Date().getUTCFullYear() - founded;
    }
}



//UI section: displaying & removing cities, and clearing fields
class UI {

    removeCity(e) {
        if(e.parentElement.classList.contains('display-button')){
            e.parentElement.parentElement.remove();
        }
    }
    
    clearValues() {
        document.getElementById("city-form").reset();
    }

    displayCity(city){
        if (city.name === false || city.realName === false || city.population === false || city.area === false || city.founded === false || city.URL === false) {
            alert('Please. The database requires your full effort.');
        } else {
    
        let html = '<div class="display-city"><div class="display-name"> %name% </div> <div class="display-realName"> %realName% </div> <div class="display-population"> %population% </div> <div class="display-area"> %area% </div> <div class="display-yearFounded"> %yearFounded% </div> <div class="display-yearsExisting"> %yearsExisting% </div> <div class="display-image"> <image src="%url%"> </div><div class="display-button"> <p class="btn">X</p> </div> </div>';

        const display = document.querySelector('.display');
    
        let newHTML = html.replace('%name%', city.name);
        newHTML = newHTML.replace('%realName%', city.realName);
        newHTML = newHTML.replace('%population%', city.population);
        newHTML = newHTML.replace('%area%', city.area);
        newHTML = newHTML.replace('%yearFounded%', city.founded);
        newHTML = newHTML.replace('%yearsExisting%', city.yearsExisting(city.founded));
        newHTML = newHTML.replace('%url%', city.url);
        display.insertAdjacentHTML('beforeend', newHTML);
        }
    }
}



//Controller with event listeners
document.getElementById('city-form').addEventListener('submit', function(e){
    //get values
    const userName = document.querySelector('#name');
    const userRealName = document.querySelector('#realName');
    const userPopulation = document.querySelector('#population');
    const userArea = document.querySelector('#area');
    const userFounded = document.querySelector('#founded');
    const userURL = document.querySelector('#image');

    const city = new City(userName.value, userRealName.value, userPopulation.value, userArea.value, userFounded.value, userURL.value);

    const ui = new UI();

    ui.displayCity(city);

    ui.clearValues();

    e.preventDefault();
})

document.querySelector('.display').addEventListener('click', function(e){
    const ui = new UI();
    
    ui.removeCity(e.target);

    ui.clearValues();

    e.preventDefault();
})