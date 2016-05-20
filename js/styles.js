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

//maps api functions
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
  };

//modal javascript
  // var modal = document.getElementById('daytripprrModal');
  var btn = document.getElementsByClassName("btn");
  var span = document.getElementsByClassName("close")[0];
  btn.onclick = function() {
    console.log(this)
      var modal = this.btn.id + "Modal";
      // find the id of 'this'
      // get id + Modal
      // set style of Modal to display
      modal.style.display = "block";
  }
  // span.onclick = function() {
  //     modal.style.display = "none";
  // }
  // window.onclick = function(event) {
  //     if (event.target == modal) {
  //         modal.style.display = "none";
  //     }
  // }
