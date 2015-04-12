chefdesfourneaux.controller('PanierController', function ($scope, $sce, PanierService, LocalStorageService ){

	$scope.user=(LocalStorageService.isKey('user'))?LocalStorageService.get('user')[0]:"";

	//console.log('PanierController');
	
	$scope.paniers = PanierService.getPanier($scope.user.id_user).success(
			function(data){
				
				$scope.paniers = data['response'];
				$scope.total = 0;
				for (var i = 0; i < $scope.paniers.length; i++) {
					$scope.total+= $scope.paniers[i]['prix_produit'];
				};
				console.log("total",$scope.total);
				

			}
	);	
	
	

	$scope.showHtml = function(stringHtml){
		return $sce.trustAsHtml(""+stringHtml);
	}





});