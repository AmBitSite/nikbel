var filterBtn = document.querySelectorAll('.filters-item')

for(var countFilterBtn = 0;countFilterBtn<filterBtn.length;countFilterBtn++){
    filterBtn[countFilterBtn].addEventListener('click', function(e){
        var filterBtnActive = document.querySelector('.filters-item_active')
        filterBtnActive.classList.remove('filters-item_active')
        e.target.classList.add('filters-item_active')
    })
}

