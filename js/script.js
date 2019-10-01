

$(document).ready(function() {
  $('#hamburger').addClass('fa-toggle-off');
    $('#hamburger').click(function(event) {
      /* Act on the event */
      
      $('#nav-shower').toggleClass('navopen');
      $('#hamburger').toggleClass('fa-toggle-on');
    });



  $('img').hover(function(){
    $(this).toggleClass('imageeffect');
  });
/*
    window.onscroll = function() {myFunction()};
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
      }
*/
  
/*
     load cart function
*/
  $('.fa-cart-plus').click(function(){
    
    $('#cartloaded').modal();

  });

/*
   member area cart function
*/
  $('.boxuser').hide();

  $(' .memberarea .member-menu li').click(function () {
    let tabname = $(this).attr('data-toggle');
    $('.boxuser').hide();
    let content = $(tabname).show();
    $('.content-area').removeClass('close-content-area');
    $('.content-area').addClass('open-content-area');
  });

  $('.content-area .close-btn').click(function(){
    $('.content-area').addClass('close-content-area');
  });
      



// cart increasement and decreasement function
    
    let qty = document.getElementById('qty');
    let count = 0; 
  
    $('#cartminus').click(function(){
         
         if(count>1){
            count --; 
            qty.value = count;
         }
    });


     $('#cartplus').click(function(){
         count ++; 
         qty.value = count;
    });
      
      


      


    
    




});
