
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




	return ({
		getAllProduits 					: getAllProduits,


	});




})