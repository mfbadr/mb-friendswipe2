angular.module('mb-friendswipe.services', [])
/**
 * A simple example service that returns some data.
 */
.factory('Friends', function(){
  'use strict';
  // Might use a resource here that returns a JSON array
  // Some fake testing data
  var friends = [
    {id: 0, name: 'Scruff McGruff'},
    {id: 1, name: 'G.I. Joe'},
    {id: 2, name: 'Miss Frizzle'},
    {id: 3, name: 'Ash Ketchum'}
  ];

  function all(){
    return friends;
  }

  return{
    all: all,
    get: function(friendId){
      // Simple index lookup
      return friends[friendId];
    }
  };
});
