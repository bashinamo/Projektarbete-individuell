const noteListIndex = document.getElementById('note-list');
let lcl = JSON.parse(localStorage.getItem("anteckningar"));
let noteArray = lcl;

noteArray.forEach(note => {
    createNotes(note);
});

function createNotes(note){
    let rnd = Math.random()*9999;
    let div = document.createElement('div');
    div.className = 'note';
    div.text = note;
    div.id = rnd;
        let p = document.createElement('p');
        p.innerHTML = note;
    div.appendChild(p);
        let star = document.createElement('h3');
        star.className = 'favorite';
        star.id = rnd + 'star';
        star.innerHTML = '⭐';
    div.appendChild(star);
    noteListIndex.appendChild(div);
}

document.addEventListener('click', function(event){
    if(event.target.className == 'note'){
        document.getElementById('noteText').innerHTML = event.target.text;
    }
});


const setting = document.getElementById('setting');

    setting.addEventListener('click', function(){
        
        if (setting.checked) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            
        }
    });
    

