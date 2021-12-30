// 모달창 슬라이드_01

var modalBg = $('.modalBg'),
    container = $('.slideshow_01'),
    slideGroup = container.find('.slides_wrap_01'),
    slides = slideGroup.find('div'),
    nav = $('.slideshow_nav_01'),
    slideCount = slides.lenght,
    currentIndex = 0,
    resetBtn = $('.modalclose_btn'),
    modalonBtn = $('.modalOn_btn');

//클릭 function

modalonBtn.click(function () {
    modalBg.fadeIn();
    resetBtn.show();
})

slides.each(function (i) {
    var newLeft = i * 836;
    $(this).css({
        left: newLeft
    })
})

// 슬라이드 이동 모션
function goToslide(index) {
    slideGroup.animate({
        left: -836 * index
    })
    currentIndex = index;
    updateNav();
    resetModal();
}

function resetModal() {
    resetBtn.click(function () {
        modalBg.hide();
        resetBtn.hide();
            slideGroup.css({
                left: 0
            });
        goToslide(currentIndex == -1)
        //창 종료 슬라이드 창 순서 초기화
    })
}

function updateNav() {
    var navPrev = nav.find('.prev');
    var navNext = nav.find('.next');

    if (currentIndex == 0) {
        navPrev.addClass('disabled')

    } else {
        navPrev.removeClass('disabled')
    }

    if (currentIndex == 3) {
        navNext.addClass('disabled')
    } else {
        navNext.removeClass('disabled')
    }
} // 슬라이드 처음, 끝 부분 불필요한 방향버튼 숨기기

nav.find('a').click(function (e) {
    e.preventDefault();
    if ($(this).hasClass('prev')) {
        goToslide(currentIndex - 1)
    } else {
        goToslide(currentIndex + 1)
    }

});
updateNav();