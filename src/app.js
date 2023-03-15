/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {

  document.querySelector("#btn").addEventListener("click", () => {
  document.querySelector("#domain").innerHTML = domainGenerator();
  });
  console.log("Domain Name Genertor");
};

  let domainGenerator = () => {
  let pronoun = ["the", "our"];
  let adj = ["strong", "giant"];
  let noun = ["runner", "whale"];
  let ext = [".org", ".com", ".uk", ".net"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let adjIndex = Math.floor(Math.random() * adj.length);
  let nounIndex = Math.floor(Math.random() * noun.length);
  let extIndex = Math.floor(Math.random() * ext.length);

  return (
    pronoun[pronounIndex] + 
    adj[adjIndex] + 
    noun[nounIndex] + 
    ext[extIndex]
  );
};
