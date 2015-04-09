chefdesfourneaux.controller('RecetteSingleController', function ($scope, $sce, RecettesService, $stateParams ){

	console.log("state params",$stateParams);
	alert("ici on essaye de recup l'idrecette  ="+$stateParams.idRecette);

	RecettesService.getRecette($stateParams.idRecette).success(
		function(data){
			$scope.recette=data.response;
			console.log("scope recette",$scope.recette);
		}
	);


	$scope.showHtml = function(stringHtml){
		return $sce.trustAsHtml(""+stringHtml);
	}


	$scope.addCommentaire = function(){
		var user=(LocalStorageService.isKey('user'))?LocalStorageService.get('user')[0]:null;
		if(user!=null){
			alert("text="+$scope.textCommentaire+ " ## note="+$scope.note);
			CommentaireService.lacherUnCom(user.id_user, $stateParams.idRecette, $scope.note, $scope.textCommentaire);
			$scope.showEditeurCommentaire=false;
		}else{
			alert("vous devez etre connecté pour lacher un com");
		}
		
	}


});