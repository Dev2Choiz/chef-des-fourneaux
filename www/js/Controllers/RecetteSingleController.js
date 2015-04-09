chefdesfourneaux.controller('RecetteSingleController', function ($scope, $sce, RecettesService,LocalStorageService, $stateParams, CommentaireService ){

	console.log("state params",$stateParams);
	$scope.comData={};
	$scope.comData.textCommentaire="";
	$scope.comData.note=1;

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
		if(user!==null){
			//alert("text="+$scope.comData.textCommentaire+ " ## note="+$scope.comData.note);
			//console.log("les params",user.id_user, $stateParams.idRecette, $scope.comData.note, $scope.comData.textCommentaire);
			res=CommentaireService.lacherUnCom(user.id_user, $stateParams.idRecette, $scope.comData.note, $scope.comData.textCommentaire);
			if (res>0) {	//on remet a jour la recette pour actualiser les comm
					RecettesService.getRecette($stateParams.idRecette).success(
						function(data){
							$scope.recette=data.response;
						}
					);
					$scope.showEditeurCommentaire=false;
			} else{
				alert("commentaire non ajouté");
				$scope.showEditeurCommentaire=true;
			};
			
		}else{
			alert("vous devez etre connecté pour lacher un com");
		}
		
	}


});