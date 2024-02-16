  // Ladda anteckningar från lokal lagring vid sidans inläsning
 
  function läggTillAnteckning() {
      const editorInnehåll = document.getElementById("editor").innerHTML.trim();
      if (editorInnehåll !== "") {
          sparaAnteckning(editorInnehåll);
          document.getElementById("editor").innerHTML = "";
      }
  }

  function sparaAnteckning(anteckningstext) {
      let anteckningar = localStorage.getItem("anteckningar");
      anteckningar = anteckningar ? JSON.parse(anteckningar) : [];
      anteckningar.push(anteckningstext);
      localStorage.setItem("anteckningar", JSON.stringify(anteckningar));
  }

  // Funktion för att tillämpa formateringskommandon
  function tillämpaFormatering(kommando, värde) {
    document.execCommand(kommando, false, värde);
  }
// Lägg till favoritknapp
    const favoriteButton = document.getElementById('favoriteButton');
    favoriteButton.innerHTML = "&#9734;"; 

favoriteButton.onclick = function () {
    nyAnteckning.classList.toggle("favorite");
    uppdateraFavorit(anteckning.text);
};

nyAnteckning.appendChild(favoriteButton);
lista.appendChild(nyAnteckning);

// Uppdatera favoritklassen baserat på sparad information
if (anteckning.favorite) {
    nyAnteckning.classList.add("favorite");
}


// Uppdatera favoritinformation i lokal lagring
function uppdateraFavorit(anteckningstext) {
    const anteckningar = localStorage.getItem("anteckningar");
    anteckningar = anteckningar ? JSON.parse(anteckningar) : [];
    anteckningar.forEach(function (anteckning) {
if (anteckning.text === anteckningstext) {
    anteckning.favorite = !anteckning.favorite;
}
});
localStorage.setItem("anteckningar", JSON.stringify(anteckningar));
}
