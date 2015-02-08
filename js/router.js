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
  'views/search_results/ResultsGridView',
  'views/home/HomeView',
], function($, _, Backbone, HeaderView, FooterView, ResultsGridView, HomeView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      "": "index",  // index with no slash
      "/": "index", // index with one trailing slash
      "/#":"index", // index with a hash 
      "properties/list/:searchString":"moviesList",  // display movies search list view using "searchString"
      "properties/grid/:searchString":"propertiesGrid",  // display movies search grid view using "searchString"
      "*actions": "defaultRoute" // Backbone will try match the route above first
    },
    // index function displays the default home screen 
    index: function(){
      var homeView = new HomeView();
      homeView.render();
    },
    propertiesGrid: function(){
      var resultsView = new ResultsGridView();
      resultsView.render();
    }
    
  });
  
  // initialize sets up the router and default views that display on all pages
  var initialize = function(){

    var app_router = new AppRouter;
    
    // display the header at all times
    var headerView = new HeaderView();
    headerView.render();

    // display the footer at all times
    var footerView = new FooterView();    
    footerView.render();
    
    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});