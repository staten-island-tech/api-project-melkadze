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
      DOMStrings.displayName.innerText = "";
        DOMStrings.displayNum.innerText = "";
        DOMStrings.displayImageFront.innerText = "";
        DOMStrings.displayImageBack.innerText = "";
        DOMStrings.displayImageShinyBack.innerText = "";
        DOMStrings.displayImageShinyFront.innerText = "";
      const dictResult = await fetch(
        `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${DOMStrings.name.value}?key=f5a1330a-9bb9-4904-86ee-d1e087a29dcb`
      );
      const dictionary = await dictResult.json();
      //console.log(data);

      const thesResult = await fetch(
          `https://dictionaryapi.com/api/v3/references/thesaurus/json/${DOMStrings.name.value}?key=ed5e5882-5898-417e-919a-5b4a85765627`
      );
      const thesaurus = await thesResult.json();


      const displayPkmn = function(data) {
        console.log(dictionary[0]);
        console.log(thesaurus[0].meta.id)
        console.log(dictionary[0].shortdef);
        console.log(dictionary[0].hwi.prs[0].mw);
        console.log(dictionary[0].date.split('{')[0]);
        console.log(thesaurus[0].meta.syns);
        console.log(dictionary[0].fl)
        // console.log(data[1].def[1].sseq[0][1][1].dt[1][1][0].t)
        // DOMStrings.displayName.innerText = data[0].hwi.prs[0].mw;
        DOMStrings.displayName.innerText = thesaurus[0].meta.id;
        DOMStrings.displayNum.innerText = dictionary[0].shortdef;
        DOMStrings.displayImageFront.innerText = dictionary[0].fl
        DOMStrings.displayImageBack.innerText = dictionary[0].hwi.prs[0].mw;
        DOMStrings.displayImageShinyBack.innerText = dictionary[0].date.split('{')[0];
        DOMStrings.displayImageShinyFront.innerText = thesaurus[0].meta.syns
        // DOMStrings.type.textContent =
        //console.log(data.types);
        // console.log(data);
      };
      displayPkmn(dictionary);
      DOMStrings.name.value = "";
    } catch (err) {
      DOMStrings.displayName.innerText ="error"
    }
  });
}
getPkmn();

// https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=f5a1330a-9bb9-4904-86ee-d1e087a29dcb
