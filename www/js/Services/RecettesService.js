
chefdesfourneaux.service('RecettesService', function($http){

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
			service 		: "ViewRecette",
			method		 	: "getViewRecette",
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
		}).error(function(data, status, headers, config) {
		    console.log("error",data);
		});
	}












/*	function getCategories(){
		var data = {
			service 		: "categorie",
			method		 	: "getcategories"
		}
		return $http({
			method : 'post',
			url : urlWebService,
			dataType: 'json',
			data : $.param(data),
			async:true,
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
	};*/




	function getCategories(){		//avec jquery

		var jsonData = {
			service 		: "categorie",
			method		 	: "getcategories"
		}

	    var retour;
	    $.ajax({
	        type: 'POST',
	        data: jsonData,
	        url: urlWebService,
	        async : false,
	        dataType: 'json',
	        success: function(data) {
	            //console.log(data);
	            retour=data.response;

	        }
	    });
	    // console.log(" get cattttt",retour);
	    return retour;
    }
	function getAllRecettesByCategorie(idCat){		//jquery
		var jsonData = {
			service 		: "viewrecette",
			method		 	: "getallviewrecettes",
			id_cat		 	: idCat
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





	function getNoteUser(idUser, idRecette){		//avec jquery

		var jsonData = {
			service 		: "Note",
			method		 	: "getNote",
			id_recette		: idRecette,
			id_user			: idUser

		}

	    var retour;
	    $.ajax({
	        type: 'POST',
	        data: jsonData,
	        url: urlWebService,
	        async : false,
	        dataType: 'json',
	        success: function(data) {
				console.log("succes note",data);
	            retour=data.response;

	        }
	    });
	     console.log(" get note",retour);
	    return retour;
    }


	function updateNote(idUser, idRecette, note){		//avec jquery

		var jsonData = {
			service 		: "Note",
			method		 	: "updateNote",
			id_recette		: idRecette,
			id_user			: idUser,
			value 			: note

		}

	    var retour;
	    $.ajax({
	        type: 'POST',
	        data: jsonData,
	        url: urlWebService,
	        async : false,
	        dataType: 'json',
	        success: function(data) {
	            retour=data.response;
	        }
	    });
	    return retour;
    }





	return ({
		getAllRecettes 					: getAllRecettes,
		getRecette 						: getRecette,
		getCategories 					: getCategories,
		getAllRecettesByCategorie		: getAllRecettesByCategorie,
		getNoteUser						: getNoteUser,
		updateNote						: updateNote

	});




})