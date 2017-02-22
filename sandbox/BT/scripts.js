(function(window, document, $) {
  var $label = $('#footer span');
  $('a').hover(function() {
    $label.html($(this).attr('data-value'));
  },
  function() {
    $label.html('');
  });
}( window, document, jQuery ));
