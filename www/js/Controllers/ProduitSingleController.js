chefdesfourneaux.controller('ProduitSingleController', function ($scope, $sce, ProduitsService,LocalStorageService, $stateParams, ModalService ){

	console.log("state params",$stateParams);

	ProduitsService.getProduit($stateParams.idProduit).success(

		function(data){
			$scope.produit = data.response[0];
			console.log($scope.produit);
			//var user=(LocalStorageService.isKey('user'))?LocalStorageService.get('user')[0]:null;
			/*if (user!==null) {
				idP = $stateParams.idProduit;
				console.log("param",user.id_user, idR);
				
			};*/
			
		}
	);


	$scope.showHtml = function(stringHtml){
		return $sce.trustAsHtml(""+stringHtml);
	}



});