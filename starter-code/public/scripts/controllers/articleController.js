'use strict';

(function(module) {
  const articleController = {};
  // DONE: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section:

articleController.init = () => {
  console.log('Inside of articleController:');
  Article.fetchAll(articleView.initIndexPage);
  $('.tab-content').hide();
  $('#articles').show();

}


  module.articleController = articleController;
})(window);
