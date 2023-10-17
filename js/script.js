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

// why
gsap.registerPlugin(ScrollTrigger);
$(function(){
  gsap.timeline({
    scrollTrigger: {
      trigger: '.why',
      start: '-5% 100%',
      end: '0% 20%',
      scrub: 1,
      
      
      // markers: 1,
    }
  })
  
  .to('.why', {backgroundColor:'#f7f7f7' , ease:'none', duration:6},0)
  .fromTo('.why .main', {scale:'0.3', y:'800%'}, {scale:'1', y:'0%' , duration:7},0)
});

// elephnat
$(function(){
  let box = document.querySelectorAll('.show');
  gsap.timeline({
    scrollTrigger: {
      trigger: '.elephant',
      start: 'top top',
      scrub: 3,
      end: '+=300%',
      pin:true,
      // markers:true
    }
  })
  .from(box, {opacity:0, 'y':'60', 'ease':'none',duration:5, 'stagger':'30'})
  .to(box, {opacity:1, duration:5},"+=15");


})
// about
$(function(){
  gsap.timeline({
    scrollTrigger: {
      trigger:'.about',
      start: 'top 100%',
      end: '20% 30%',
      scrub: 3,
      // markers:true
    }
  })
  .fromTo('.about .title', {opacity:0},{opacity:1, duration:5},10)
  .fromTo('.about .left', {x:'-100% ', opacity:'0'}, {x:'0%', opacity:'1', duration:5},10) 
  .fromTo('.about .middle', {x:'100% ', opacity:'0'}, {x:'0%', opacity:'1', duration:5},10) 
  .fromTo('.about .img', {x:'200%'}, {x:'0%', duration:5},10)
  .fromTo('.about .video', {scale:0.1},{scale:1, duration:5},10)

});




// coding
$(function(){


  let list = gsap.utils.toArray('.coding ul li');
  let scrollTween = gsap.to(list, {
    xPercent: -100 * (list.length -1),
    ease: 'none',
    scrollTrigger: {
      trigger: '.coding',
      pin:true,
      scrub:1,
      start: '53% 30%',
      end: '200%',
      // markers:true
    }
  })
});




// skill
$(function() {
    $('.skillName li').on('mouseover', function() {
      var index = $('.skillName li').index($(this));
      $('.skill .skillful li').removeClass('on');
      $('.skill .skillful li:eq('+ index +')').addClass('on');
    });
  
    $('.skillName li').on('mouseleave', function() {
      $('.skill .skillful li').removeClass('on');
    });
    
  });  
  


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