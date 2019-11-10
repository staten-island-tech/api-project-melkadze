import { getWordInfo, DOMStrings } from "./api";

DOMStrings.input.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector(".nes-btn").click();
  }
});

getWordInfo();


/*
list of points:

4. Boolean logic is used to prevent users from inputting blank fields
7. Project is hosted on Netlify or Heroku(Adam, Carlo, Andrew)

*/