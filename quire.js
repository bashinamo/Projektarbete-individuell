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
