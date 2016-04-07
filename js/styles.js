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

});
