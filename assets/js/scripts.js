$(function () {

    let img = '';
    let imgUrl = '';

    $('.mid').on('click', function () {
        img = fetch('https://source.unsplash.com/1920x1080').then(function (i) {
            imgUrl = i.url;
        });

        $('body').css({
            'background': `url(${imgUrl}) #fff`,
            'transition': 'background 500ms'
        });
    });

});