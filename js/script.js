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
$(document).ready(function () {
    $("#menu1").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 500);
    });
});



var searchInput = document.querySelector('.header-search-input')
function showListSearchItems(arr){
    var listWrap = document.createElement('div')
    listWrap.classList.add('search-wrap')
    searchInput.after(listWrap)
    for(var countRes = 0;countRes<arr.length;countRes++){
        var listItem = document.createElement('a')
        listItem.classList.add('search-wrap__item')
        // + arr[countRes].c_slug + arr[countRes].sc_slug + arr[countRes].p_slug
        listItem.setAttribute('href', arr[countRes].html_url)
        listItem.innerText = arr[countRes].author.login
        listWrap.appendChild(listItem)
        
    }
    
}

searchInput.addEventListener('keyup', function(){
var url = `https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits`
var promise = fetch(url)
    .then(res=>res.json())
    .then(res=>{
        document.querySelector('.header-search-btn').classList.add('header-search-btn_active')
        if(document.querySelector('.search-wrap'))document.querySelector('.search-wrap').remove()
        showListSearchItems(res)
    })
})
document.querySelector('.header-search-btn').addEventListener('click', function(){
    searchInput.value=''
    if(document.querySelector('.search-wrap'))document.querySelector('.search-wrap').remove()
    if(document.querySelector('.header-search-btn_active')){
        document.querySelector('.header-search-btn_active').classList.remove('header-search-btn_active')
    }
})