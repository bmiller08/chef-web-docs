$(document).ready(function() {
  var $titles = $(".home--section--title");
  var $description = $(".home--descriptions");

  $titles.hover(
    function() {
      $titles.find(".home--section--icon").removeClass("fade-in");

      if ($(window).width() > 800) {
        var $this = $(this);

        if ( $(this).parents('[data-section="tutorials"]').length)  {
          $description.removeClass("skills-active docs-active training-active community-active")
            .addClass("tutorials-active");

        } else if ( $(this).parents('[data-section="skills"]').length) {
          $description.removeClass("tutorials-active docs-active training-active community-active")
            .addClass("skills-active");

        } else if ( $(this).parents('[data-section="docs"]').length) {
          $description.removeClass("skills-active tutorials-active training-active community-active")
            .addClass("docs-active");

        } else if ( $(this).parents('[data-section="training"]').length) {
          $description.removeClass("skills-active docs-active tutorials-active community-active")
            .addClass("training-active");
        } else if ( $(this).parents('[data-section="community"]').length) {
          $description.removeClass("skills-active docs-active tutorials-active training-active")
            .addClass("community-active");
        }
      }
  }, function() {

  });
});