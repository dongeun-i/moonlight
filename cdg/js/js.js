$(document).ready(function(){

  // $(document).scroll(function(){
  //   $('body > div fieldset section ol li').each(function(){
  //       $scroll = $(document).scrollTop();
  //       $top = $(this).offset().top
  //       $windowH = ($(window).height()/2)
        
        
  //       if($scroll >= $top - $windowH){
  //           if(!$(this).hasClass('scrollEvent')){
  //           }
  //           $(this).addClass('scrollEvent');
  //       }else{
  //           $(this).removeClass('scrollEvent');
  //       }
  //   })
  //   });
  // $(document).scroll(function(){
  //     if($(document).scrollTop() >= $('.scroll').eq(1).offset().top){
  //       if(!$('header nav ul li:nth-of-type(2)').hasClass('active')){
  //         $('header nav ul li:nth-of-type(2)').addClass('active')
  //       }else{
  //         if($('header nav ul li:nth-of-type(2)').hasClass('active')){
  //           $('header nav ul li:nth-of-type(2)').removeClass('active')
  //         }
  //       }
  //     }
  //   })
    //  $('.scroll').each(function(index,iteam){
    //     var $index = index;
    // });
    // $('header nav ul li').click(function(){
    //   var content = $('header nav ul li').index(this)
    //   alert(content)
    // })


    $(document).scroll(function(){
      $contents = $('.scroll')
      $scroll = $(document).scrollTop(); 
      $menu = $('header nav ul li')

      $.each($contents, function(idx, item){
        $target = $('header nav ul li').eq(idx)
        $top = $contents.eq(idx).offset().top
        idx = ('.scroll').index(this)
        if($scroll >= $top){
          $menu.removeClass('active');
          $menu.eq($idx).addClass('active');
        }
      })
    })

    
  // $(window).scroll(function(){
  //   var menu = $('header nav ul li.m'),
  //       target = $('header nav ul li.m').parent(),
  //       scltop = $(window).scrollTop(),
  //       content = $('.scroll'),
  //       i= target.index(),
  //       targetTop = target.offset().top;
    
  //   $.each(content, function(idx,item){
  //     if(targetTop <= scltop){
  //       menu.removeClass('active');
  //       menu.eq(idx).addClass('active');
  //     }
  //   })
  // })


  var stars=800;
  var $stars=$(".stars");
  var r=800;
  for(var i=0;i<stars;i++){
    var $star=$("<div/>").addClass("star");
    $stars.append($star);
  }
  $(".star").each(function(){
    var cur=$(this);
    var s=0.2+(Math.random()*1);
    var curR=r+(Math.random()*300);
    cur.css({ 
      transformOrigin:"0 0 "+curR+"px",
      transform:" translate3d(0,0,-"+curR+"px) rotateY("+(Math.random()*360)+"deg) rotateX("+(Math.random()*-50)+"deg) scale("+s+","+s+")"
       
    })
  })

  $('section.slideArea ul li span').click(function(){
    var liw = $('section.slideArea ul li').width()
    var ulleft=$('section.slideArea ul').offset().left

    if($(this).text()=='arrow_forward_ios'){
      $('section.slideArea ul').css('left', ulleft - liw);
    }else{
      $('section.slideArea ul').css('left', ulleft + liw);
    }
  })



})