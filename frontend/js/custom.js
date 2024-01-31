$(document).ready(function(){

  //sticky js
  // $(".menu").sticky({topSpacing:0});

  // =======Up arrow button==============

  var mybutton = document.getElementById("up-arrow");
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
	//======== Typed-js=============== 
	$("#typed").typed({
        stringsElement: $('#typed-strings'),
        typeSpeed: 60,
        backDelay: 900,
        loop: true,
        contentType: 'html',
        loopCount: true
    });

  //smoothScroll
	smoothScroll.init();


	// Isotope Gallery

    var $grid = $('.grid').isotope({

      itemSelector: '.grid-item',

      percentPosition: true,

      masonry: {

        columnWidth : '.grid-item'

      }

    });

    var filterFns = {

      numberGreaterThan50: function() {

        var number = $(this).find('.number').text();

        return parseInt( number, 10 ) > 50;

      },

      ium: function() {

        var name = $(this).find('.name').text();

        return name.match( /ium$/ );

      }

    };

    $('.filters-button-group').on( 'click', 'button', function() {

      var filterValue = $( this ).attr('data-filter');

      filterValue = filterFns[ filterValue ] || filterValue;

      $grid.isotope({ filter: filterValue });

    });

    $('.button-group').each( function( i, buttonGroup ) {

      var $buttonGroup = $( buttonGroup );

      $buttonGroup.on( 'click', 'button', function() {

        $buttonGroup.find('.is-checked').removeClass('is-checked');

        $( this ).addClass('is-checked');

      });

    });
    
    // start Progress ber 
    $('#laravel').LineProgressbar({
      percentage: 50,
      ShowProgressCount:true,
      fillBackgroundColor:'#52e5ab',
      backgroundColor:'#ebebeb',
      radius:'0px',
      height:'3px',
      width:'100%'
    });
    $('#CodeIgniter').LineProgressbar({
      percentage: 50,
      ShowProgressCount:true,
      fillBackgroundColor:'#52e5ab',
      backgroundColor:'#ebebeb',
      radius:'0px',
      height:'3px',
      width:'100%'
    });
    $('#VueJs').LineProgressbar({
      percentage: 40,
      ShowProgressCount:true,
      fillBackgroundColor:'#52e5ab',
      backgroundColor:'#ebebeb',
      radius:'0px',
      height:'3px',
      width:'100%'
    });
    $('#Wordpress').LineProgressbar({
      percentage: 60,
      ShowProgressCount:true,
      fillBackgroundColor:'#52e5ab',
      backgroundColor:'#ebebeb',
      radius:'0px',
      height:'3px',
      width:'100%'
    });
    $('#js').LineProgressbar({
      percentage: 50,
      ShowProgressCount:true,
      fillBackgroundColor:'#52e5ab',
      backgroundColor:'#ebebeb',
      radius:'0px',
      height:'3px',
      width:'100%'
    });
    $('#Python').LineProgressbar({
      percentage: 30,
      ShowProgressCount:true,
      fillBackgroundColor:'#52e5ab',
      backgroundColor:'#ebebeb',
      radius:'0px',
      height:'3px',
      width:'100%'
    });
    $('#Graphics').LineProgressbar({
      percentage: 60,
      ShowProgressCount:true,
      fillBackgroundColor:'#52e5ab',
      backgroundColor:'#ebebeb',
      radius:'0px',
      height:'3px',
      width:'100%'
    });
    $('#Video').LineProgressbar({
      percentage: 70,
      ShowProgressCount:true,
      fillBackgroundColor:'#52e5ab',
      backgroundColor:'#ebebeb',
      radius:'0px',
      height:'3px',
      width:'100%'
    });

    $('.testimonial-warp').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      autoplay:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:2
          }
      }
  })


});
  

