chefdesfourneaux.controller('ProduitsController', function ($scope, $sce, ProduitsService, LocalStorageService ,PanierService){
	// Récupération des informations de l'utilisateur
	$scope.user = (LocalStorageService.isKey('user'))?LocalStorageService.get('user')[0]:"";
	// Récupération de tout les produits
	$scope.produits = ProduitsService.getAllProduits().success(
			function(data){
				$scope.produits = data['response'];
			}
	);	
	// Permet d'interprêter le html
	$scope.showHtml = function(stringHtml){
		return $sce.trustAsHtml(stringHtml);
	}
	// Permet de mettre des produits dans le panier
	$scope.buyProduit = function(idProd){

		$scope.resultBuy = PanierService.insertPanier($scope.user.id_user, idProd).success(
			function(data){
				if (data['response']>0) {
					alert("ajouté au panier");
				} else{
					alert("Le produit n'a pas été ajouté au panier");
				};
			}
		);	
	}
});