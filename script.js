/*  Date:       03/13/2022
    Project:    Portfolio
    For:        devCodeCamp
    Developer   Parker Hadley  */

"use script"

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('menu-btn i').toggleClass('active');
    });
});