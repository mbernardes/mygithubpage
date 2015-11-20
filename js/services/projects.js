 app.factory('projects', ['$http', function($http) { 
  return $http.get('https://gist.githubusercontent.com/mbernardes/eed7691aada463988d2e/raw/9e9c5b0b515acff8739bcf2efc4f6b2abfc85c7c/projects.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);