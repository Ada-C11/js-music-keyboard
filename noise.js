$(document).ready(function() {
  $('.instrument').on('click', 'button', function(event) {
    $(`#${$(this).html()}Audio`)
      .get(0)
      .load();
    $(`#${$(this).html()}Audio`)
      .get(0)
      .play();
  });

  $('body').keydown(event => {
    $(`#${event.key}Audio`)
      .get(0)
      .load();
    $(`#${event.key}Audio`)
      .get(0)
      .play();
  });
});
