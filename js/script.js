var filterBtn = document.querySelectorAll('.filters-item')

for (var countFilterBtn = 0; countFilterBtn < filterBtn.length; countFilterBtn++) {
    filterBtn[countFilterBtn].addEventListener('click', function (e) {
        var filterBtnActive = document.querySelector('.filters-item_active')
        filterBtnActive.classList.remove('filters-item_active')
        e.target.classList.add('filters-item_active')
    })
}

$(document).ready(function () {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

});
$(document).ready(function () {
    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 500);
    });
});