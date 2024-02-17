
document.getElementById('pokemon').addEventListener("click", (evt) => {
    if(evt.target.tagName == 'IMG'){
        document.getElementById('displayImage').src = evt.target.src;
        document.getElementById('displayImage').style.display = 'block';

        gtag('event', 'Image-Clicked', {
            event_category: 'click_engagement',
            event_label: evt.target.alt
        });
    }
});

    