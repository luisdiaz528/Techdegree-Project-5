let searchInput = document.querySelector('#photo-search');
let images = document.querySelectorAll('a');

searchInput.addEventListener('keyup', (e) => {
    for(let i = 0; i < images.length; i +=1 ) {
        if(images[i].dataset.title.includes(searchInput.value.toLowerCase()) || searchInput.value.length === 0) {
            images[i].style.display = 'inline';
        } else {
            images[i].style.display = 'none';
        }
    }
});


