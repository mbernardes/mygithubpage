 app.factory('projects', ['$http', function($http) { 
  return $http.get('https://dl.dropboxusercontent.com/u/4353431/projects.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);