const gpickr = new GPickr({
    el: document.querySelector('.gpickr'),
    stops: [
        ['rgb(255,132,109)', 0],
        ['rgb(255,136,230)', 1]
    ]
}).on('change', (() => {
    console.log('Gradient => ', gpickr.getGradient());
}));

// setTimeout(() => {
//     gpickr.destroyAndRemove();
// }, 4000)
