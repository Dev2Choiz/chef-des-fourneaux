chefdesfourneaux.controller('CategoriesController', function ($scope, $sce, RecettesService, LocalStorageService, $ionicModal, ModalService ){


	console.log('catCtrl');
	$scope.categories=null;
	$scope.categories=RecettesService.getCategories();
	
	console.log("scope categorie",$scope.categories);

	for (var i = 0; i < $scope.categories.length; i++) {
		var tmp=RecettesService.getAllRecettesByCategorie($scope.categories[i].id_cat);
		console.log("Recette recu"+ $scope.categories[i].id_cat, tmp);

		$scope.categories[i].recettesCat=tmp;
	}
	console.log("scope categorie avec recette ",$scope.categories);
	
	$scope.fonc=function (){
		alert("Samyn");
	}


	$scope.afficherRecette=function (idRecette){
		//console.log($scope);

		RecettesService.getRecette(idRecette).success(
			function(data){
				console.log("recette",data.response);
				$scope.recette=data.response;
			}
		);

		mod=ModalService.getModal("templates/Recettes/recetteSingleModal.html", 1, $scope, 'slide-in-up');
		mod.then(function(modal) {
		    $scope.modal1= modal;
		    $scope.modal1.show();
		    console.log("mod",mod);
		})

		
	}


	//$state.transitionTo("app.recetteAll");




/*	console.log('catCtrl');
	$scope.categories=null;
	RecettesService.getCategories().success(
		function(data){
			console.log("getcat",data.response);
			 $scope.categories= data.response;
			 console.log("juste apresscope",$scope.categories);

			for (var i = 0; i < $scope.categories.length; i++) {
				alert("id:" + $scope.categories[i].id_cat);
				RecettesService.getAllRecettesByCategorie($scope.categories[i].id_cat).success(
					function(data){
						//alert("2"+i);
						//console.log("cattttre7", data.response);
						alert("ici"+i);
						$scope.categories['recettes'+$scope.categories[i].id_cat]=data.response;
					}
				);
				console.log("scope cat "+ i,$scope.categories);
			}

		}
	);*/
	







	

	$scope.showHtml = function(stringHtml){
		return $sce.trustAsHtml(""+stringHtml);
	}

/*	$scope.recettesByCategorie = function(idCat){
		var retour=null;
		alert("1{{"+idCat);
		if(idCat !== 0){
			RecettesService.getAllRecettesByCategorie(idCat).success(
				function(data){
					//alert("2");
					console.log("cattttre7", data.response);
					$scope.recettes = data.response;
					//retour= data.response;

				}
			);
			//console.log("cattttre7TMP", retour);
			//return retour;

		}else{
			//alert("3");
			return null;
		}
	}*/

	$scope.selectedCat = 0;
	$scope.recettes = null;

});