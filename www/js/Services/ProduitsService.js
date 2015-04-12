
chefdesfourneaux.service('ProduitsService', function($http){

	//appelle la vue des recettes
	function getAllProduits(){

		var data = {
			service 		: "Produit",
			method		 	: "getAllProduits"
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

	function getProduit(idProd){

		var data = {
			service 		: "Produit",
			method		 	: "getProduit",
			id_produit		: idProd
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

	function getTopProduits(){		//jquery
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