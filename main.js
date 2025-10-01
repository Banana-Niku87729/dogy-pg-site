const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const loaderImg = document.getElementById('loader-img');
if (prefersDark) {
loaderImg.src = "assets/gifs/loading-dark.gif";
}
$(function () {
function end_loader() { $('.loader').fadeOut(800); }
function show_txt() { $('.loader .txt').fadeIn(400); }
function hide_txt() { $('.loader .txt').fadeOut(400); }
$(window).on('load', function () {
    setTimeout(show_txt, 1000);
    setTimeout(hide_txt, 3500);
    setTimeout(end_loader, 4500);
});

// スムーススクロール機能を追加
$('a[href^="#"]').click(function(){
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 80; // ヘッダーの高さ分調整
    $('body,html').animate({scrollTop:position}, 600, "swing");
    return false;
});
});