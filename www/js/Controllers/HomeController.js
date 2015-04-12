chefdesfourneaux.controller('HomeController', function ($scope, $sce, RecettesService){

	$scope.submit = function(){
		console.log('HomeController');
	} 
	//$scope.user=(LocalStorageService.isKey('user'))?LocalStorageService.get('user')[0]:"";

	console.log('HomeController');
		
	$scope.recettes = RecettesService.getAllRecettes().success(
			function(data){
				
				$scope.recettes = data['response'];

				//return data['response'];
				console.log("controlleur valeur recu",data);
				console.log("recettes : "+$scope.recettes);
			}
	);	

	$scope.recettesTop = RecettesService.getTopRecettes();
	console.log("################################################RecettesTop",$scope.recettesTop);
	
	

	$scope.showHtml = function(stringHtml){
		return $sce.trustAsHtml(""+stringHtml);
	}	

});