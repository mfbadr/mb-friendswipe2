(function(){
  'use strict';
  angular.module('mb-friendswipe')
  .controller('DashCtrl', ['$scope', 'OpenFB', '$rootScope', function($scope, OpenFB, $rootScope){
    //get info on current user
    OpenFB.api({path:'/me'}).then(function(data){
      console.log('ALL THE DATA!  - ', data);
      console.log('MY ID IS', data.data.id);
      $rootScope.myFacebookId = data.data.id;
    }, function(data){
      console.log(data);
    });
    //
    OpenFB.api({path:'/me/picture?redirect=0&type=large'}).then(function(data){
      console.log('/me/picture', data);
    });

    //get current users friends
    OpenFB.api({path:'/me/friends'}).then(function(data){
      console.log('/me/friends', data);
      $scope.friends = data.data;
    });

    //get picture for each friend
    //loop through friends retrieving picture
    //
    //get
    //id/picture?redirect=0&type=large

  }]);
})();
