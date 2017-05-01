$(function() {

  var scr=$(window).scrollTop();//スクロールの位置取得

  var home=$('#header1').position().top;//ヘッダーの位置取得
  var work=$('#work-wrapper').position().top;//ワークコンテンツの位置取得
  var profile=$('#profile-wrapper').position().top;//プロフィールコンテンツのの位置取得

  if(home<=scr<work){


  }else if(work<=scr<profile){

  }else if(profile<=scr){

  }





  /*$('window').scroll(function(){
  var scroll=$(document).scrollTop();
   var position=$('#header1').offset().top;
   var position1=$('#work-wrapper').offset().top;
   var position2=$('#profile-wrapper').offset().top;

 });*/

  $('.index-btn').click(function() {  //slideの下のボタンを押した時の実行
    $('.active').removeClass('active');
    $('.active-btn').removeClass('active-btn');
    var clickedIndex = $('.index-btn').index($(this));
    $('.slide').eq(clickedIndex).addClass('active');
    $('.index-btn').eq(clickedIndex).addClass('active-btn');
  });






  $('#top-btn').click(function(){//ロゴをクリックした時の実行
    $('html,body').animate({
      'scrollTop':0
    },'slow');
  });

  $('#header').find('a').click(function(){//ヘッダーのコンテンツ名をクリックした時のナビゲーション

    var id=$(this).attr('href');
    var position=$(id).offset().top

    $('html,body').animate({
      'scrollTop':position
    },'slow');
  });


  $('.button_other').click(function(){　//workのopenとclose
    var $none=$('.figure-none');
    if($none.hasClass('open')){
      $none.removeClass('open');
      $none.slideUp();
      
    } else{
      $none.addClass('open');
      $none.slideDown();
      $none.css('display','inline-block');
    }
  });



});
