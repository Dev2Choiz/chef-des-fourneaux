
chefdesfourneaux.service('PanierService', function($http){

	//appelle la vue des recettes
	function getPanier(idUser){

		var data = {
			service 		: "ViewPanier",
			method		 	: "getViewPanier",
			id_user			: idUser
		}

		return $http({
			method : 'post',
			url : urlWebService,
			dataType: 'json',
			data : $.param(data),
			async:false,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}).success(function(data) {
			 console.log("valeur dans le success :",data);
			 return "valeur qui vient du succes";


		}).error(function(data, status, headers, config) {
		    console.log("error",data);
		    //false;
		    return "valeur qui vient du error";
		});
	};

	function insertPanier(idUser, idProd){

		var data = {
			service 		: "Panier",
			method		 	: "insertPanier",
			id_produit		: idProd,
			id_user			: idUser
		}

		return $http({
			method : 'post',
			url : urlWebService,
			dataType: 'json',
			data : $.param(data),
			async:false,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}).success(function(data) {
			 console.log("valeur dans le success :",data);
			 return "valeur qui vient du succes";
		}).error(function(data, status, headers, config) {
		    console.log("error",data);
		    return "valeur qui vient du error";
		});
	};





	return ({
		getPanier 						: getPanier,
		insertPanier					: insertPanier


	});




})