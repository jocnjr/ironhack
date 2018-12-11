$(function() {
  $('ul li:first').addClass('selected');
  $('section article:nth-child(2)').addClass('middle');
  $('.list-item:odd').addClass('highlighted');
  $('.list-item:last').css('border', '1px solid #eee');
  $('form input:focus').css('border-color', 'blue');
  // $('#campus:focus').css('border-color', 'blue');
});

  // $("article:contains('Article 2')").addClass('middle');
  // $("article:contains('Article 5')").addClass('middle');