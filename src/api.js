export const DOMStrings = {
  input: document.getElementById("word-form"),
  inputWord: document.getElementById("word-input"),
  word: document.getElementById("display-word"),
  definition: document.getElementById("display-definition"),
  definition1: document.getElementById("display-definition-1"),
  definition2: document.getElementById("display-definition-2"),
  definition3: document.getElementById("display-definition-3"),
  definition4: document.getElementById("display-definition-4"),
  origin: document.getElementById("display-origin"),
  partOfSpeech: document.getElementById("display-part"),
  pronunciation: document.getElementById("display-pronunciation"),
  synonyms: document.getElementById("display-synonyms")
};

export function getWordInfo() {
  DOMStrings.input.addEventListener("submit", async function(e) {
    e.preventDefault();

    if (DOMStrings.inputWord.value == "") {
      alert('Input a word, please.');
      location.reload();
    }

    try {
      DOMStrings.word.innerText = "";
      DOMStrings.definition.innerText = "";
      DOMStrings.origin.innerText = "";
      DOMStrings.partOfSpeech.innerText = "";
      DOMStrings.pronunciation.innerText = "";
      DOMStrings.synonyms.innerText = "";

      const dictResult = await fetch(
        `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${DOMStrings.inputWord.value}?key=f5a1330a-9bb9-4904-86ee-d1e087a29dcb`
      );
      const dictionary = await dictResult.json();

      const thesResult = await fetch(
        `https://dictionaryapi.com/api/v3/references/thesaurus/json/${DOMStrings.inputWord.value}?key=ed5e5882-5898-417e-919a-5b4a85765627`
      );
      const thesaurus = await thesResult.json();

      const displayWord = function() {
        DOMStrings.word.innerText = dictionary[0].meta.id
          .split(":")[0]
          .split(",")[0];
          console.log(DOMStrings.definition.innerText = dictionary[0].shortdef)
        DOMStrings.definition.innerText = dictionary[0].shortdef[0];
        //the following is to deal with multiple definitions (no for loop as all unique names)
        if (dictionary[0].shortdef[1]) {DOMStrings.definition1.innerText = dictionary[0].shortdef[1]}
        if (dictionary[0].shortdef[2]) {DOMStrings.definition2.innerText = dictionary[0].shortdef[2]}
        if (dictionary[0].shortdef[3]) {DOMStrings.definition3.innerText = dictionary[0].shortdef[3]}
        if (dictionary[0].shortdef[4]) {DOMStrings.definition4.innerText = dictionary[0].shortdef[4]}
        DOMStrings.origin.innerText = dictionary[0].date.split("{")[0];
        DOMStrings.partOfSpeech.innerText = dictionary[0].fl;
        DOMStrings.pronunciation.innerText = dictionary[0].hwi.prs[0].mw;
        try {
          DOMStrings.synonyms.innerText = thesaurus[0].meta.syns;
        } catch (err) {
          DOMStrings.synonyms.innerText = "No synonyms";
        }
      };

      displayWord();

      DOMStrings.inputWord.value = "";
    } catch (err) {
      DOMStrings.word.innerText = `ERROR: Not all info found for word '${DOMStrings.inputWord.value}'.`;
      console.log(`[GetWordInfo] Error description: ${err}`);
    }
  });
}