chefdesfourneaux.controller('ProduitsController', function ($scope, $sce, ProduitsService, LocalStorageService ,PanierService){

	$scope.user=(LocalStorageService.isKey('user'))?LocalStorageService.get('user')[0]:"";
	var errorMessage    = "";
	$scope.errorState    = false;

	var successMessage    = "";
$scope.successState    = false;

  $scope.showError = function (){
    //alert("ici "+errorMessage);
    return errorMessage;
  }


  $scope.showSuccess = function (){
    //alert("ici "+errorMessage);
    return successMessage;
  }

	//$scope.user=(LocalStorageService.isKey('user'))?LocalStorageService.get('user')[0]:"";

	console.log('ProduitsController');
		
	$scope.produits = ProduitsService.getAllProduits().success(
			function(data){
				console.log("Data : ",data);
				
				$scope.produits = data['response'];
				console.log("############################################",$scope.produits);
			}
	);	
	
	


	$scope.showHtml = function(stringHtml){
		return $sce.trustAsHtml(stringHtml);
	}


	/*$scope.actualiserProduit=function(){
		ProduitsService.getAllProduits().success(
			function(data){
				return data['response'];
			}
		);	
	}*/


	$scope.buyProduit = function(idProd){
		//idProd
		//$scope.resultBuy = 
		console.log("scope avant l'insert : ",$scope);
		$scope.resultBuy = PanierService.insertPanier($scope.user.id_user, idProd).success(
				function(data){
					console.log("Data : ",data);
					
					//$scope.resultBuy = data['response'];
					if (data['response']>0) {
						alert("ajouté au panier");
						//$scope.successState=true;
						//successMessage="le produit a correctement été ajouté";
						//$state.go('app.produits');
					} else{
						alert("!ajouté au panier");
						$scope.errorState=true;
						errorMessage="le produit n'a pas été ajouté";
					};
					//$scope.produits = $scope.actualiserProduit();
					console.log("##########################################ajoutt## apres ",$scope, $scope.produits);
				}
		);	

		//
	}




});