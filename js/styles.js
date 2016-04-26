$(function() {

  $('.title').hover(
      function() {
          var $this = $(this); // caching $(this)
          $this.data('initialText', $this.text());
          $this.text("HEY Y'ALL!");
      },

      function() {
          var $this = $(this); // caching $(this)
          $this.text($this.data('initialText'));
      }
  );

  $('.resume').css('height', $(window).height()+'px');

});

  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: {lat: 30.2672, lng: -97.7431}
    });

    var image = 'images/mahface.png';
    var beachMarker = new google.maps.Marker({
      position: {lat: 30.27415, lng: -97.73996},
      map: map,
      icon: image
    });
  }
