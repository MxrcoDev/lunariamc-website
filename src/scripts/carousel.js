document.addEventListener('DOMContentLoaded', function() {
  var carousel = new bootstrap.Carousel(document.getElementById('serverImages'), {
    interval: 5000,
    wrap: true
  });
});