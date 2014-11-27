/**
 * Movie List View processes data from PropertyCollection to display to the user in list form
 * source data: PropertyCollection
 * template: searchResultsListTemplate.html
 */

define([
  'jquery',
  'underscore',
  'backbone',
  'models/PropertyModel',
  'collections/PropertyCollection',
  'views/search_forms/SearchFormView',
  'text!templates/search_results/searchResultsListTemplate.html'
], function($, _, Backbone, PropertyModel, PropertyCollection, SearchFormView, searchResultsListTemplate){

  var MoviesListView = Backbone.View.extend({
    el: $("#searchResults"),
    model: PropertyModel,
    render: function(searchString){
        
      // display Something while searching is in progress so the user is aware of action
      this.$el.html('<div class="searchLoader">Searching...</div>');
      
      // instantiate a new movie collection class to get search results
      var movies = new PropertyCollection();
      
      // fetch the data from the source using the search string populated by the search form
      movies.fetch({
        reset: true,
        query: searchString
      });
      
      // clear the existing results for a new search, and then display the results using the movie model
      movies.bind('reset', function () { 
        movieData = movies.models; 
        var data = {
                      results: movies.models,
                      _: _ 
                    };
        // compile the view using the search results template, and the search result data returned
        var compiledTemplate = _.template( searchResultsListTemplate, data );
        
        // output the compiled template to the defined element
        $("#searchResults").html( compiledTemplate ); 
      });
    }
  });
   return MoviesListView;
});