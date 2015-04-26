
chefdesfourneaux.service('ProduitsService', function($http){

	/**
	 * getAllProduits 				Recupére les produits auprès du webservice
	 * @return 			object 		httpPromise
	 */
	function getAllProduits(){
		// clé de l'objet json qu'on passera en paramètre à la méthode $http
		var data = {
			service 		: "Produit",
			method		 	: "getAllProduits"
		}

		// Envoie la requète au webservice qui appelle la methode getAllProduits du service Produit
		return $http({
			method : 'post',
			url : urlWebService,
			dataType: 'json',
			data : $.param(data),
			async:false,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		});
	};


	/**
	 * getProduit Récupère un produit auprès du webservice
	 * @param 			 int 	 idProd identifiant du produit
	 * @return 			 object  httpPromise
	 */
	function getProduit(idProd){
		// clé de l'objet json qu'on passera en paramètre à la méthode $http
		var data = {
			service 		: "Produit",
			method		 	: "getProduit",
			id_produit		: idProd
		}
		// Envoie la requète au webservice qui appelle la methode getProduit du service Produit
		return $http({
			method : 'post',
			url : urlWebService,
			dataType: 'json',
			data : $.param(data),
			async:false,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		});
	};

	/**
	 * getTopProduits  Récupère le top 3 de tout les produits auprès du webservice
	 * @return 			 object  httpPromise
	 */
	function getTopProduits(){
		var jsonData = {
			service 		: "Produit",
			method		 	: "getTopProduits",
		}
	    var retour;
	    $.ajax({
	        type: 'POST',
	        data: jsonData,
	        url: urlWebService,
	        dataType: 'json',
	        async : false,
	        success: function(data) {
	            //console.log(data);
	            retour=data.response;
	        }
	    });
	    // console.log("retour dans get recette ", retour);
	    return retour;

	};



	return ({
		getAllProduits 					: getAllProduits,
		getProduit 						: getProduit,
		getTopProduits 					: getTopProduits,


	});




})