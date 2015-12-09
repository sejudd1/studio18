//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {

    $(document).ready(function() {
        $('#fullpage').fullpage({
            anchors: ['onePage', 'twoPage', 'threePage', 'fourPage', 'fivePage', 'sixPage', 'sevenPage', 'eightPage'],
            menu: '#menu',
            scrollingSpeed: 1000,
            verticalCentered: false,
            afterRender: function(){

                //playing the video
                $('video').get(0).play();
            }
        });
    });
});
