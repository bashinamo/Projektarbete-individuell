// Visa anteckningar i stora vyn
document.addEventListener('click', function(event){
    if(event.target.className == 'note'){
        document.getElementById('noteText').innerHTML = event.target.text;
    }
});


// Favorite
document.addEventListener('click', function(event){
    if(event.target.className == 'favorite' || event.target.className == 'favorite favoriteOn'){
        if(document.getElementById(event.target.id + 'Wrapper').isFav == false){
            document.getElementById(event.target.id + 'Wrapper').isFav = true;
            document.getElementById(event.target.id).classList.add('favoriteOn');
        } else {
            document.getElementById(event.target.id + 'Wrapper').isFav = false;
            document.getElementById(event.target.id).classList.remove('favoriteOn');
        }
        getFavoriteNotes();
    }
});

function getFavoriteNotes(){
    favoriteArray = [];
    for(let i = 0; i < note.length; i++){
        if(note[i].isFav == true){
            favoriteArray.push(note[i]);
        }
    }
    localStorage.setItem('favoriteNotes', JSON.stringify(favoriteArray));
}