require(['jquery', 'bsWysihtml5'], function() {
  RichText = {
    initialize: function() {
      $('textarea[richtext]').each(function(){
        $(this).removeAttr('richtext');
        $(this).wysihtml5();
      });
    }
  }

  $(document).ready(function(){
    RichText.initialize();
  });

  $(document).find('body').on('DOMNodeInserted', function(){
    RichText.initialize();
  });  
});