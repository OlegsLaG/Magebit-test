jQuery(function ($){

    ///Give content block rest height of col-1
    function fixHeight() {
        var menuHeight = $('.navbar-container').outerHeight(true);
        var parentHeight = $('.col-1').height();
        var contentHeight = parentHeight - menuHeight;
        $('.content').css('height',contentHeight);
    }
    $('.check').on('click', function (){
        var termsInput = $('#terms');
        termsInput.attr('checked', !termsInput.attr('checked'))
    });
    $(document).ready(function (){

        fixHeight();
    })
});