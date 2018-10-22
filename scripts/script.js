/*
Author:
SHUBHAM PRAKASH
LinkedIn: https://www.linkedin.com/in/ishubhamprakash/
GitHub: https://github.com/i-shubhamprakash
*/

$(document).ready(function () {
    // initialising matetialize navbar
    $('.sidenav').sidenav();

    // Initialising materialize parallax
    // $('.parallax').parallax();

    //for tabs
    // $('.tabs').tabs();


    // For go to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});