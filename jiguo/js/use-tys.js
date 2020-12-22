$('.hot a').on('click',function(){
    window.location.href="./tys.html";

});

//返回顶部
$('.back').click(function(){
    $('body,html').animate({
         scrollTop: 0
    },700)
})