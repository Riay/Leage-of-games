angular.module('comicApp')

	.controller('infoController', function($scope, $rootScope, $routeParams, comicAppService) { // Function with '$scope'(from html) and 'gameAppService' from service.js
	  console.log("we're in infoController...")
	  console.log($routeParams.infoResults)

	  var idComicSelected = $routeParams.infoResults

	  var aComicSelected = $rootScope.comiclist.filter(function(comic) {
	      return comic.id === +idComicSelected
	  })

	  $scope.comicSelected = aComicSelected[0]
	  console.log($scope.comicSelected)
	  $rootScope.section = 'comic_info'
	})
