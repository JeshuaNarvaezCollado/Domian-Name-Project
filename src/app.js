/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronouns = ["the", "our", "my"];
  let adjs = ["great", "big", "small", "amazing"];
  let nouns = ["jogger", "racoon", "runner", "walker"];
  let domains = ["com", "us", "es"];

  let name = "";

  // Using for of*
  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let domain of domains) {
          name = `${pronoun}${adj}${noun}.${domain}`;
          console.log(name);
        }
      }
    }
  }

  /* Using classic fors
  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjs.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        for (let l = 0; l < domains.length; l++) {
          name = `${pronouns[i]}${adjs[j]}${nouns[k]}.${domains[l]}`;
          console.log(name);
        }
      }
    }
  }*/
  console.log("Hello Rigo from the console!");
};
