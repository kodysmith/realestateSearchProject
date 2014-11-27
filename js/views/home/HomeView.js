/**
 * Home View is a base page view to display the home screen
 * template: homeTemplate.html
 */

define([
  'jquery',
  'underscore',
  'backbone',
  'views/search_forms/SearchFormView',
  'text!templates/home/homeTemplate.html',
  'text!templates/search_forms/searchFormTemplate.html'

], function($, _, Backbone, SearchFormView, homeTemplate, searchFormTemplate){

  var HomeView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
        // display home template to the defined element "el"
        this.$el.html(homeTemplate);   
        console.log('render home');
        // display the search form on the home screen
        // demonstrating how you can pass element selector or other values to models to manipulate their
        // result destination 
        var searchFormView = new SearchFormView({el:$('#searchFormHolder')});
        searchFormView.render();
    }
  });

  return HomeView;
});