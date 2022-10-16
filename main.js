
 $(window).scroll(function(){
  $('nav').toggleClass('scrolled',$(this).scrollTop()>50)
});
$(document).ready(function(){       
  var scroll_pos = 0;
  $(document).scroll(function() { 
      scroll_pos = $(this).scrollTop();
      if(scroll_pos < 50) {
          $('.hvr-reveal').css('color', '#fff');
          $('.navbar-toggler-icon').css('background-image',' url("img/white.png")')
      } else {
          $('.hvr-reveal').css('color', '#fff');
          $('.navbar-toggler-icon').css('background-image',' url("img/white.png")')
      }
  });
});


//PLACEMENT STATS JS

let nCount = selector => {
  $(selector).each(function () {
    $(this)
      .animate({
        Counter: $(this).text()
      }
      ,
      {
        
      duration: 4000,
        easing: "swing",
        step: function (value) {
          $(this).text(Math.ceil(value));
        }
      });
  });
};

let a = 0;
$(window).scroll(function () {
  
  let oTop = $(".numbers").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() >= oTop) {
    a++;
    nCount(".rect > h1");
  }
})



//HOW IT WORKS

// window.onload = function digital_fn(){

//   // toggle button
//   let toggle = document.querySelector("#nav .toggle-btn");
//   let collapse = document.querySelector("#nav .collapse");

//   toggle.addEventListener('click', function(event){
//       collapse.classList.toggle('active')
//       // console.log(toggle)
//   });

// }


//testimonial
