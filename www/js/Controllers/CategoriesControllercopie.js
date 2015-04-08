chefdesfourneaux.controller('CategoriesController', function ($scope, $sce, RecettesService, LocalStorageService ){


	console.log('catCtrl');
	$scope.categories=null;
	RecettesService.getCategories().success(
		function(data){
			console.log("getcat",data.response);
			 $scope.categories= data.response;
			 console.log("juste apresscope",$scope.categories);

			for (var i = 0; i < $scope.categories.length; i++) {
				RecettesService.getAllRecettesByCategorie($scope.categories.id_cat).success(
					function(data){
						//alert("2"+i);
						//console.log("cattttre7", data.response);
						$scope.categories['recettes'+$scope.categories.id_cat]=data.response;
					}
				);
				console.log("scope cat "+ i,$scope.categories);
			}

		}
	);
	







	

	$scope.showHtml = function(stringHtml){
		return $sce.trustAsHtml(stringHtml);
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