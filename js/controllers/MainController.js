app.controller('MainController', ['$scope', 'projects', function($scope, projects) {
  projects.success(function(data){ 
  	$scope.projectList = data;
  });
}]);


app.filter('removespaces', function() {
	return function(string) {
		if(string == '')
			return string;
		else
			return string.replace(/\s+/g,'');
	}
})