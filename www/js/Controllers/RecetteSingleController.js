chefdesfourneaux.controller('RecetteSingleController', function ($scope, $sce, RecettesService,LocalStorageService, $stateParams, CommentaireService ){

	console.log("state params",$stateParams);
	$scope.comData={};
	$scope.comData.textCommentaire="";
	$scope.comData.noteUser=1;

	RecettesService.getRecette($stateParams.idRecette).success(

		function(data){
			$scope.recette=data.response;

			var user=(LocalStorageService.isKey('user'))?LocalStorageService.get('user')[0]:null;
			if (user!==null) {
				idR=$stateParams.idRecette;
				console.log("param",user.id_user, idR);
				

				$scope.comData.noteUser=RecettesService.getNoteUser(user.id_user, idR);
				console.log( "note", $scope.comData.noteUser);
				if($scope.comData.noteUser===0) $scope.comData.noteUser=1
				
			} else{
				$scope.comData.noteUser=1;
			};
			console.log("scope recette",$scope.recette, "note", $scope.comData.noteUser);
			
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

	$scope.changerNote = function(note){
		alert("dans change");
		var user=(LocalStorageService.isKey('user'))?LocalStorageService.get('user')[0]:null;
		if(user!==null){
			res=RecettesService.updateNote(user.id_user, $stateParams.idRecette, note);
			console.log("udpdat", res);
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