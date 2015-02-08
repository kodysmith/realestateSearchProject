/**
 * Movie Collection searches a datasource api for movie information
 * source: rotten tomatoes 
 * source return: JSONP
 * API Type: remote (XSS)
 * 
 * return: backbone collection of movie objects
 * input: options.query = search string for movie titles
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'models/PropertyModel'
], function($, _, Backbone, PropertyModel) {
    var ZWSID= "X1-ZWz1dz4mm1z097_7kib9";
    var testDataXML="http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=X1-ZWz1dz4mm1z097_7kib9&address=2114+Bigelow+Ave&citystatezip=Seattle%2C+WA";
                
  	var PropertyCollection = Backbone.Collection.extend({
				model: PropertyModel,
				//url: '../data/starwars.json',
				//url: 'http://www.omdbapi.com/?r=JSON&',
				//url: 'http://www.imdb.com/xml/find?json=1&nr=1&tt=on&q=',
				
				//http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=<ZWSID>&address=2114+Bigelow+Ave&citystatezip=Seattle%2C+WA
                
				url: '/data/zillow.xml', 
				parse: function (data) {
        			var parsed = [];
			        $(data).find('result').each(function (index) {
			            var city = $(this).find('city').text();
			            parsed.push({city: city});
			        });
			        debugger

			        return parsed;
			    },

			    fetch: function (options) {
			    	debugger
			        options = options || {};
			        options.dataType = "xml";
			        return Backbone.Collection.prototype.fetch.call(this, options);
			    },
				
				error : function(collection, response, options) {
					error.log(response.statusText);
				},
				initialize: function(){
					
				},
				timeout : 5000
			});
	return PropertyCollection;
});
