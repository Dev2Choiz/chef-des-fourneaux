
application.service('RecettesService', function($http){

	//appelle la vue des recettes
	function getAllRecettes(){

		var data = {
			service 		: "viewrecette",
			method		 	: "getallviewrecettes"
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




	function getRecette(id){

		var data = {
			service 		: "viewrecette",
			method		 	: "getviewrecette",
			id_recette		: id

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
	}



	function getCategories(){

		var data = {
			service 		: "categorie",
			method		 	: "getcategories"
		}

		return $http({
			method : 'post',
			url : urlWebService,
			dataType: 'json',
			data : $.param(data),
			async:false,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		});
	}



	function getAllRecettesByCategorie(idCat){

		var data = {
			service 		: "viewrecette",
			method		 	: "getallviewrecettes",
			id_cat		 	: idCat
		}

		return $http({
			method : 'post',
			url : urlWebService,
			dataType: 'json',
			data : $.param(data),
			async:false,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		});

	};





	return ({
		getAllRecettes 					: getAllRecettes,
		getRecette 						: getRecette,
		getCategories 					: getCategories,
		getAllRecettesByCategorie		: getAllRecettesByCategorie

	});




})