$(function(){
    $('.slider_img').bxSlider({
        mode: 'fade',
        pager: true, 
        auto: true,
        autoHover:true,  
        pause: 1500
    });
    $(".menu_toggle_btn").click(function(){
        $(".gnb").stop().toggle();
    });
});