const note = document.getElementsByClassName('note');
const noteListIndex = document.getElementById('note-list');
let lcl = JSON.parse(localStorage.getItem('anteckningar'));
let noteArray = [];

if(lcl)
noteArray = lcl;

noteArray.forEach(note => {
    createNotes(note);
});

function createNotes(note){
    let div = document.createElement('div');
    div.className = 'note';
    div.text = note;
    div.isFav = false;
    div.id = note + 'Wrapper';
        let p = document.createElement('p');
        p.innerHTML = note;
    div.appendChild(p);
        let star = document.createElement('h3');
        star.className = 'favorite';
        star.id = note;
        star.innerHTML = '⭐';
    div.appendChild(star);
    noteListIndex.appendChild(div);
}


let localFavNotes = JSON.parse(localStorage.getItem('favoriteNotes'));
let favoriteArray = [];

if(localFavNotes != null){
    favoriteArray = localFavNotes;
    for(let i = 0; i < note.length; i++){
        favoriteArray.forEach(function(notes){
            if(note[i].getElementsByClassName('favorite')[0].id == notes.text){
                note[i].isFav = true;
                note[i].getElementsByClassName('favorite')[0].classList.add('favoriteOn');
            }
        });
    }
}

// Dark mode local storage
if(localStorage.darkMode != undefined){
    if(localStorage.darkMode == 'true'){
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}