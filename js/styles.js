$(function() {

  $('.title').hover(
      function() {
          var $this = $(this);
          $this.data('initialText', $this.text());
          $this.text("HEY Y'ALL!");
      },

      function() {
          var $this = $(this);
          $this.text($this.data('initialText'));
      }
  );

  $('.resume').css('height', $(window).height()+'px');

});
