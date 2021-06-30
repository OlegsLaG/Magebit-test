jQuery(function ($){

    ///Give content block rest height of col-1
    function fixHeight() {
        var menuHeight = $('.navbar-container').outerHeight(true);
        var parentHeight = $('.col-1').height();
        var contentHeight = parentHeight - menuHeight;
        $('.content').css('height',contentHeight);
    }
    function testEmail() {
        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        if (testEmail.test($('.e-mail').value)){

        }
        else {

        }
    }
    $(document).ready(function (){
        fixHeight();
    });
    $(window).resize(function() {
        if ($(window).width > 768){
            fixHeight();
        }
    });
});