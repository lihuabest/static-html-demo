export default {
    init: () => {
        $(function() {
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
        });
    }
}
