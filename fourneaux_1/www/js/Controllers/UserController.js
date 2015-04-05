application.controller('UserController', function ($scope, $sce, UserService,  $location, LocalStorageService ){

	$scope.submit = function(){
		//alert($scope.inputMail);
		var user= UserService.authentification($scope.inputMail, $scope.inputPassword );
		console.log(user);
		
		if(user.response===false){
			LocalStorageService.remove("user");
			//LocalStorageService.remove("user");
			$scope.message=user.apiErrorMessage;
		}else{
			LocalStorageService.save({'user': user.response });
			$scope.message="";
			$location.path("/recetteAll");
		}
		



		//console.log('apres :', user);
	}


		
	$scope.showHtml = function(stringHtml){
		return $sce.trustAsHtml(stringHtml);
	}




	



});





/*	//Methode ou on recoit les données qu'on vt
	$scope.submit = function(){
		$scope.searchs = UserService.authentification($scope.inputMail, $scope.inputPassword ).success(
			function(data){
				console.log("controlleur valeur recu", data);

			}
		).error(
			function(data){
				console.log("controlleur error valeur recu", data);
			}
		);
		console.log('apres :', $scope.searchs);
	} 
	
	$scope.showHtml = function(stringHtml){
		return $sce.trustAsHtml(stringHtml);
	}*/