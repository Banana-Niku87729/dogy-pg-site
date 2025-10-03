    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const loaderImg = document.getElementById('loader-img');
    if (prefersDark) loaderImg.src = "assets/gifs/loading-dark.gif";

    $(window).on('load', function () {
      setTimeout(() => $(".loader").fadeOut(800), 1500);
    });

    // ハンバーガーメニュー制御
    $(".menu-toggle").click(function () {
      $(".buttons").toggleClass("show");
    });

    // スムーススクロール
    $('a[href^="#"]').click(function(){
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - 60;
      $('body,html').animate({scrollTop:position}, 600, "swing");
      return false;
    });
