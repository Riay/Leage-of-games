angular.module('comicApp')

    .factory('comicAppService', function($http) {
        function searchComics(nameComic) {
            var urlSearchComics = 'https://api-comic-vine.herokuapp.com/search/?api_key=c4d827fcba5a6da6369b24fb77588dfbc83c2ab6&format=json&query=' + nameComic
            return $http.get(urlSearchComics)
                .then(function(response) {
                    var myIssues = response.data.results
                        // myIssues.forEach(function (element) { console.log(element.resource_type) })
                    return myIssues.filter(function(element) {
                        return (element.resource_type === 'issue')
                    })
                })
        }

        function getComicById(id) {
            var urlSearchComics = 'https://api-comic-vine.herokuapp.com/search/?api_key=c4d827fcba5a6da6369b24fb77588dfbc83c2ab6&format=json&query=' + nameComic
            return $http.get(urlSearchComics)
        }
        return {
            searchComics: searchComics

        }
    })