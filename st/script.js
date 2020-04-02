let gpickr;

gToggleDestroy = () => {
    if (document.querySelector('.gpickr')) {
        if (gpickr) {
            gpickr.destroyAndRemove();
            gpickr = null;
        }
    } else {
        document.querySelector('.main').innerHTML = '<div class="gpickr"></div>';
        gpickr = new GPickr({
            el: document.querySelector('.gpickr'),
            stops: [
                ['rgb(255,132,109)', 0],
                ['rgb(255,136,230)', 1]
            ]
        }).on('change', (() => {
            console.log('Gradient => ', gpickr.getGradient());
        }));
    }
}

document.getElementById ("toggle").addEventListener ("click", gToggleDestroy, false);

// setTimeout(() => {
//     gpickr.destroyAndRemove();
// }, 4000)
