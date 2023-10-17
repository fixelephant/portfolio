// 올라감 방지
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});



// scroll animation
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	        });
}); 




// splitting
$(function(){Splitting();}); 


// halfMenu
$(function() {
    $('.menuOpen a').on('click' , function() {
      $('.halfMenu').removeClass('on');
      $('.halfMenu').addClass('on');
    })
  
    $('.halfMenu .menuClose').on('click' , function() {
      $('.halfMenu').removeClass('on');
    })
  
  })





// footer
$(function() {
    $('footer .contact li').on('mouseover', function() {
      $('footer .svg').removeClass('on');
      $('footer .svg').addClass('on');
    });
  
    $('footer .contact li').on('mouseleave', function(){
      $('footer .svg').removeClass('on')
    });
  })