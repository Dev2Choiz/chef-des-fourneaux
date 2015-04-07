chefdesfourneaux.controller('PanierController', function ($scope, $sce, PanierService, LocalStorageService ){

	$scope.user=(LocalStorageService.isKey('user'))?LocalStorageService.get('user')[0]:"";

	console.log('PanierController');
		
	$scope.paniers = PanierService.getPanier($scope.user.id_user).success(
			function(data){
				console.log("Data : ",data);
				
				$scope.paniers = data['response'];
				$scope.total = 0;
				

			}
	);	
	
	

	$scope.showHtml = function(stringHtml){
		return $sce.trustAsHtml(stringHtml);
	}





});