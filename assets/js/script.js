
function initRightNav() {
    /* Set img src for right navbar*/


    $(".right-nav .logo").html($(".main-navbar .logo").html());
    /* fill right navar ul list items*/

    $(".right-nav .nav-menu").html($(".main-navbar .navbar-nav").parent().html());
    /*toogle btn */

    $('.hamb-btn').click(function () {

        $('.hamb-btn').toggleClass('open');
        $(".right-nav").toggleClass('show');

    });
}
