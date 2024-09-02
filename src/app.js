import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extensions = [".com", ".net", ".us", ".io", ".es"];

  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        for (let e = 0; e < extensions.length; e++) {
          let domain = pronoun[p] + adj[a] + noun[n] + extensions[e];
          console.log(domain);
        }

        let nounLength = noun[n].length;
        for (let e = 0; e < extensions.length; e++) {
          let ext = extensions[e];
          let hackIndex = nounLength - ext.length + 1;
          if (hackIndex > 0 && noun[n].endsWith(ext.substring(1))) {
            let hackedDomain =
              pronoun[p] + adj[a] + noun[n].substring(0, hackIndex) + ext;
            console.log(hackedDomain);
          }
        }
      }
    }
  }
};
