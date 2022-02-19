const swiper = new Swiper('.swiper', {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: true,
  },
  loop: true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Availability Calender
$("#calender").datepicker({
  numberOfMonths: 2,
  minDate: 0,
  changeYear: true,
  changeMonth: true
});
// Booking Calender
$( function() {
  var dateFormat = "mm/dd/yy",
  from = $("#from").datepicker( {
    minDate: 0,
    numberOfMonths: 2,
    changeYear: true,
    changeMonth: true
  }).on( "change", function() {
    to.datepicker( "option", "minDate", getDate( this ) );
  }),
  to = $("#to").datepicker( {
    numberOfMonths: 2,
    changeYear: true,
    changeMonth: true
  }).on( "change", function() {
    from.datepicker( "option", "maxDate", getDate( this ) );
  });

  function getDate( element ) {
    var date;
    try {
      date = $.datepicker.parseDate( dateFormat, element.value );
    } catch( error ) {
      date = null;
    }

    return date;
  }
});

