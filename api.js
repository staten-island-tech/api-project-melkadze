const DOMStrings = {
    input: document.getElementById("pkmn-form"),
    name: document.getElementById("pokemon-name"),
    displayName: document.querySelector(".pkmn-name-size"),
    displayImageFront: document.querySelector(".display-image-front-def"),
    displayImageBack: document.querySelector(".display-image-back-def"),
    displayImageShinyFront: document.querySelector(".display-image-shiny-front"),
    displayImageShinyBack: document.querySelector(".display-image-shiny-back"),
    type: document.querySelector(".type"),
    displayNum: document.querySelector(".pkmn-num")
    };
    
    DOMStrings.input.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector(".nes-btn").click();
    }
    });
    
    function getPkmn() {
    DOMStrings.input.addEventListener("submit", async function(e) {
    e.preventDefault();
    try {
    const result = await fetch(
    `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${DOMStrings.name.value}?key=f5a1330a-9bb9-4904-86ee-d1e087a29dcb`
    );
    console.log
    const data = await result.json();
    //console.log(data);
    
    const displayPkmn = function(data) {
        console.log(data[0].shortdef)
        console.log(data[0].hwi.prs[0].mw)
        console.log(data[0].date)
        console.log(data[0])
        console.log(data[0].suppl.examples)
    DOMStrings.displayName.innerText = data.term;
    DOMStrings.displayNum.innerText = data.id;
    DOMStrings.displayImageFront.src = data.sprites.front_default;
    DOMStrings.displayImageBack.src = data.sprites.back_default;
    DOMStrings.displayImageShinyBack.src = data.sprites.back_shiny;
    DOMStrings.displayImageShinyFront.src = data.sprites.front_shiny;
    DOMStrings.type.textContent = data.types.map(data => data.type.name);
    //console.log(data.types);
    console.log(data)
    
    };
    displayPkmn(data);
    DOMStrings.name.value = "";
    
    } catch (err) {
    console.log(err);
    }
    });
    }
    getPkmn();

// https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=f5a1330a-9bb9-4904-86ee-d1e087a29dcb

