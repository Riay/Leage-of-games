angular.module('comicApp')

  .controller('resultsController', function($scope, $rootScope, $routeParams, comicAppService, $location) { // Function with '$scope'(from html) and 'gameAppService' from service.js
    $rootScope.section = 'comic_results'
    $scope.title = 'Results of comic search'

    var searchQuery = $routeParams.searchResults

    comicAppService.searchComics(searchQuery) // We send to searchComics() the $routeParams
        .then(function(response) {
            $rootScope.comiclist = response
            console.log($scope.comiclist)
            $scope.onSearchInfo = function() {
                $location.path('/comic_info/')
            }
        })
})


