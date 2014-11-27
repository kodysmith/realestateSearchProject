/**
 * AppRouter is the main router class for this app
 * 
 *          additional routers can be defined, as more complexity is needed, but for now
 *          this is the only router required for this app
 * 
 * Filename: router.js
 * 
 */

define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/HeaderView',
  'views/home/FooterView',
  'views/home/HomeView',
  'views/search_results/MoviesListView',
  'views/search_results/MoviesGridView',
  'views/search_forms/SearchFormView',
], function($, _, Backbone, HeaderView, FooterView, HomeView, MoviesListView, MoviesGridView, SearchFormView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      "": "index",  // index with no slash
      "/": "index", // index with one trailing slash
      "/#":"index", // index with a hash 
      "movies/list/:searchString":"moviesList",  // display movies search list view using "searchString"
      "movies/grid/:searchString":"moviesGrid",  // display movies search grid view using "searchString"
      "*actions": "defaultRoute" // Backbone will try match the route above first
    },
    // index function displays the default home screen 
    index: function(){
      var homeView = new HomeView();
      homeView.render();
    },
    // moviesList function displays and processes search results based on URL "searchString"
    moviesList: function(searchString){
      var moviesListView = new MoviesListView();
      moviesListView.render(searchString);
    },
    // moviesGrid function displays and processes search results based on URL "searchString"
    moviesGrid: function(searchString){
      var moviesGridView = new MoviesGridView();
      moviesGridView.render(searchString);
    }
    
  });
  
  // initialize sets up the router and default views that display on all pages
  var initialize = function(){

    var app_router = new AppRouter;
    
    // display the header at all times
    var headerView = new HeaderView();
    headerView.render();
    
    // the purpose of this app is to Search for movies, so this should display always
    var searchFormView = new SearchFormView();
    searchFormView.render();

    // display the footer at all times
    var footerView = new FooterView();    
    footerView.render();
    
    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});