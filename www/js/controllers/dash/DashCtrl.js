(function(){
  'use strict';
  angular.module('mb-friendswipe')
  .controller('DashCtrl', ['$scope', 'OpenFB', '$rootScope', 'Dash', function($scope, OpenFB, $rootScope, Dash){
    //get info on current user

    OpenFB.api({path:'/me'}).then(function(data){
      console.log('ALL THE DATA!  - ', data);
      console.log('MY ID IS', data.data.id);
      $rootScope.myFacebookId = data.data.id;

      Dash.register(data.data).then(function(response){
        console.log('User successfully registered');
      }, function(response){
        console.log('Something went registering the user', response);
      });

    }, function(data){
      console.log('Something went wrong getting info from facebook: ', data);
    });

  }]);
})();
