$(function() {
  alert("DOM is Loaded");
  $("a").click(function(event) {
    alert( "Hi jQuery! I Love You!!" );
  });
});

$( window ).on( "load", function() {
  alert("DOM & Images are Loaded");
})