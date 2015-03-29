application.controller('RecetteAllController', function ($scope, $sce, RecettesService, LocalStorageService ){

	$scope.user=(LocalStorageService.isKey('user'))?LocalStorageService.get('user')[0]:"";

		
	$scope.recettes = RecettesService.getAllRecettes().success(
			function(data){
				
				$scope.recettes = data['response'];
				//return data['response'];
				console.log("controlleur valeur recu",data);
			}
	);	
	
	

	$scope.showHtml = function(stringHtml){
		return $sce.trustAsHtml(stringHtml);
	}





});