// application est le nom qu'on a donné à notre "angular" dans index.html
// On déclare un controller qui aura certaines constantes, le RecettesService permet
//  de charget les fonctions qu'on a déclarées dans ce service
// 
chefdesfourneaux.controller('RecetteAllController', function ($scope, $sce, RecettesService, $routeParams ){




	alert("ici on recupere  "+$routeParams.idRecette);



	RecettesService.getRecette($routeParams.idRecette).success(
		function(data){
			$scope.recette=data.response;
					}
	);


	$scope.showHtml = function(stringHtml){
		return $sce.trustAsHtml(""+stringHtml);

	}



});