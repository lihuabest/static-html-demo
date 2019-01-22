import Swiper from '../libs/swiper';

export default {
    init: () => {
        $(function() {
            // fullpage初始化
            $('#fullpage').fullpage({
                navigation: true,
                onLeave: function(a, b) {
                    if (a === 1 && b === 2) {
                        $('.logo-container').addClass('min');
                    } else if (a === 2 && b === 1) {
                        $('.logo-container').removeClass('min');
                    }
                }
            });

            let swiper = new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination'
                },
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            });
        });
    }
};
