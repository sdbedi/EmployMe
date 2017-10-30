let app = angular.module('flapperNews', ['ui.router', 'ngSanitize']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'MainCtrl'
      })

    $urlRouterProvider.otherwise('home');
}]);

app.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
  $scope.searches = [];
  $scope.jobResults = [];

  $scope.getJobs = function(){
    if(!$scope.location || $scope.location === '' || !$scope.keyword || $scope.keyword === '') { return; }
    $scope.message = '';
    $scope.ip = userip;

    let jobSearchURL = 'search/' + $scope.location + '/' + $scope.keyword + '/' + $scope.ip + '/' + Date()
    let location = $scope.location
    let keyword = $scope.keyword
    $http.get(jobSearchURL).then(function(results) {
      console.log("recieved jobs", results.data);
      $scope.jobResults = results.data;
      if ($scope.jobResults.length === 0) {
        $scope.message = 'No jobs found. Please check your search terms and try again.';
      } else {
        $scope.message = "Showing results for '" + keyword + "' in '" + location + "'."
      };
    }, function(e) {
      alert("error", e);
    });
      
    $scope.location = '';
    $scope.keyword = '';
  };
}]);

