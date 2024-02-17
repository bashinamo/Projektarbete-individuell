
document.getElementById('pokemon').addEventListener("click", (evt) => {
    if(evt.target.tagName == 'IMG'){
        document.getElementById('displayImage').src = evt.target.src;
        document.getElementById('displayImage').style.display = 'block';
        gtag('event', 'click', {
            'event_category': 'button_click',
            'event_label': 'calc_button'
        })
    }
});
    