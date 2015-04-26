
chefdesfourneaux.service('RecettesService', function($http){

	//appelle la vue des recettes
	function getAllRecettes(){

		var data = {
			service 		: "ViewRecette",
			method		 	: "getAllViewRecettes"
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
			service 		: "Categorie",
			method		 	: "getCategories"
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
	            retour = data.response;

	        }
	    });
	    // console.log(" get cattttt",retour);
	    return retour;
    }
	function getAllRecettesByCategorie(idCat){		//jquery
		var jsonData = {
			service 		: "ViewRecette",
			method		 	: "getAllViewRecettes",
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

	function getTopRecettes(){		//jquery
		var jsonData = {
			service 		: "ViewRecette",
			method		 	: "getAllViewRecettes",
			top		 		: 1
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

	function getAllRecettesByType(type){		//jquery
		var jsonData = {
			service 		: "ViewRecette",
			method		 	: "getAllViewRecettes",
			type		 	: type
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


	function getNoteMoyenne( idRecette){		//avec jquery

		var jsonData = {
			service 		: "Note",
			method		 	: "getMoyenneNote",
			id_recette		: idRecette

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
	     console.log(" get noteMoyenne",retour);
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
	            retour = data.response;
	        }
	    });
	    return retour;
    }





	return ({
		getAllRecettes 					: getAllRecettes,
		getRecette 						: getRecette,
		getTopRecettes					: getTopRecettes,
		getCategories 					: getCategories,
		getAllRecettesByCategorie		: getAllRecettesByCategorie,
		getAllRecettesByType			: getAllRecettesByType,
		getNoteUser						: getNoteUser,
		getNoteMoyenne					: getNoteMoyenne,
		updateNote						: updateNote

	});




})