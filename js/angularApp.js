var app = angular.module("aplicacion", []);

app.controller('controladorForm', ['$scope', function($scope){
	$scope.formTitle = "Formulario de login";
	$scope.formAction = "Login";

	$scope.submit = function(user){
		var username = user.username,
			email = user.email,
			message = user.message;

			console.log("Username:"+username+"<br/>Email:"+email+"<br/> Mensaje:"+message );
	}
}]);

//El Ng model es lo ke hace ke angular valide