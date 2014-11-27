/**
 * Movie Search Form View displays the search form and process the interactions by the user
 * template: searchFormTemplate.html
 */

define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/search_forms/searchFormTemplate.html'
], function($, _, Backbone, searchFormTemplate){

  var SearchFormView = Backbone.View.extend({
    el: $("#searchFormHolder"),
    render: function(){
      // display the form using the form template
      this.$el.html(searchFormTemplate);
      
      // setup appropriate interactions, and override default actions
      $('#movieSearchForm').submit(
        function(e){
            e.preventDefault();
            var viewStyle = $('form select[name^=viewStyle]').val();
            var searchString = $('form input[name^=searchString]').val();
            window.location.hash = 'movies/'+viewStyle + '/' + encodeURIComponent(searchString);
        });
      $('#movieSearchForm select').change(function(){
            var viewStyle = $('form select[name^=viewStyle]').val();
            var searchString = $('form input[name^=searchString]').val();
            window.location.hash = 'movies/'+viewStyle + '/' + encodeURIComponent(searchString);
      });
    }
  });
  return SearchFormView;
});