chefdesfourneaux.controller('RecetteAllController', function ($scope, $sce, RecettesService, LocalStorageService ){

	$scope.user=(LocalStorageService.isKey('user'))?LocalStorageService.get('user')[0]:"";

	console.log('RecetteAllController');
		
	$scope.recettes = RecettesService.getAllRecettes().success(
			function(data){
				
				$scope.recettes = data['response'];
				//return data['response'];
				console.log("controlleur valeur recu",data);
				console.log("recettes : "+$scope.recettes);
			}
	);	
	
	

	$scope.showHtml = function(stringHtml){
		return $sce.trustAsHtml(""+stringHtml);
	}





});