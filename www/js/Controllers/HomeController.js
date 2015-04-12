chefdesfourneaux.controller('HomeController', function ($scope, $sce, RecettesService, ProduitsService){


	//$scope.user=(LocalStorageService.isKey('user'))?LocalStorageService.get('user')[0]:"";

	console.log('HomeController');
	//	console.log(urlImg);
		
	$scope.recettes = RecettesService.getAllRecettes().success(
			function(data){
				
				$scope.recettes = data['response'];

				//return data['response'];
				console.log("controlleur valeur recu",data);
				console.log("recettes : "+$scope.recettes);
			}
	);	

	$scope.recettesTop = RecettesService.getTopRecettes();
	//console.log("################################################RecettesTop",$scope.recettesTop);

	$scope.recettesEntree = RecettesService.getAllRecettesByType('entree');
	$scope.recettesPlat = RecettesService.getAllRecettesByType('plat');
	$scope.recettesDessert = RecettesService.getAllRecettesByType('dessert');
	
	$scope.categories = RecettesService.getCategories();

	$scope.produitsTop = ProduitsService.getTopProduits();	

	$scope.showHtml = function(stringHtml){
		return $sce.trustAsHtml(""+stringHtml);
	}	

});