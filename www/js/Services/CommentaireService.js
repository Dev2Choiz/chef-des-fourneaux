chefdesfourneaux.service('CommentaireService', function( $http){

	function lacherUnCom(idUser, idRecette, note, textCom){

		var jsonData = {
			service 		: "Commentaire",
			method		 	: "insertCommentaire",
			id_user	 		: idUser,
			id_recette	 	: idRecette,
			note 			: note,
			value	 		: textCom
		}


		console.log("jsondata", jsonData);
		var retour=null;
		$.ajax({
	        type: 'POST',
	        data: jsonData,
	        url: urlWebService,
	        dataType: 'json',
	        async :false,
	        success: function(data) {
				retour=data;
				console.log("Commentaire ajouté ");
	        }
	    });
		console.log("apres le $.ajax ", retour);
		if (retour.error) {
			retour=0;
		}else{
			retour=retour.response;
		};
	    return retour;
	}




	return ({
		lacherUnCom : lacherUnCom
	});




})















		/*
		//METHODE  qui permet de renvoyer au controlleur la valeur qu'on veut
		 
    var deferred = $q.defer();
	var retour=$http({
		method : 'post',
		url : urlWebService,
		dataType: 'json',
		data : $.param(jsonData),
		async:false,
		cache:false,

	}).success(function(data, status, headers, config) {
		console.log("valeur dans le success :", data);
		deferred.resolve("terminé !");
		//return "123798072";
		//return data['response'];
	}).error(function(data, status, headers, config) {
		console.log("error",data);
	    deferred.reject("errooooooooooorrr !");
	    //return data['response'];
	    //false;
	    //return "valeur qui vient du error";
	});

	return deferred.promise;
		 */


