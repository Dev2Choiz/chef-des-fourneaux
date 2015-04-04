application.controller('CategorieRecetteController', function ($scope, $sce, RecettesService, LocalStorageService ){

	$scope.user=LocalStorageService.get('user')[0];

	
	RecettesService.getCategories().success(
		function(data){
			console.log("getcat",data.response);
			$scope.categories=data.response;
		}
	)




	

	$scope.showHtml = function(stringHtml){
		return $sce.trustAsHtml(stringHtml);
	}

	$scope.recettesByCategorie= function(idCat){
		//alert("1{{"+idCat);
		if(idCat!==0){
			RecettesService.getAllRecettesByCategorie(idCat).success(
				function(data){
					//alert("2");
					console.log("cattttre7", data.response);
					$scope.recettes=data.response;
					//return data.response;

				}
			);
		}else{
			//alert("3");
			return null;
		}
	}

$scope.selectedCat=0;
$scope.recettes=null;

});