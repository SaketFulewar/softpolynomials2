$(".nav-menu").on('click',function(){
    $('.nav-menu').removeClass('active');
    $('.nav-menu').addClass('a-white');
    $(this).removeClass('a-white');
    $(this).addClass('active');
})
