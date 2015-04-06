chefdesfourneaux.controller('GlobalUserController', function ($scope, $sce, UserService, $ionicModal, $state, $location, LocalStorageService ){
		//alert("passe par la 2");
		$scope.globalUser = (verifierConnection())?LocalStorageService.get('user')[0]:"";
		$scope.statusCo = verifierConnection();
		$scope.showLogOut = false;
		//alert("init=  "+$scope.statusCo);
		console.log('appUser user :', $scope.globalUser);
		
	$scope.getPseudo = function(){
		//alert("affuser"+$scope.globalUser.pseudo+LocalStorageService.isKey('user'));
		//return $scope.user.pseudo;
		$scope.globalUser = (verifierConnection())?LocalStorageService.get('user')[0]:"";

		if(LocalStorageService.isKey('user')){
			return $scope.showHtml("Bienvenue "+$scope.globalUser.pseudo+"<p>(Déconnexion)</p>");
		}else{
			return "";
		}
		
	}

	function verifierConnection(){
		res = (LocalStorageService.isKey('user'))?true:false;
		//$scope.statusCo = res;
		$scope.statusCo = res;
		return res;
	}


function actualiserStatusCo(){
	$scope.statusCo=verifierConnection();
	return true;
}



	


	$scope.showHtml = function(stringHtml){
		return $sce.trustAsHtml(stringHtml);
	}


	$scope.deconnecter = function(){
		console.log("ici");
		//alert('ici');
		LocalStorageService.flush();
		$scope.globalUser = null;
		$scope.statusCo = verifierConnection();
		return true;
	}

	


//################################## GESTION CONNEXION


  var errorMessage    = "";
  //errorMessage    = "";
  $scope.errorState    = false;
  $scope.showPanier    = false;
  // $scope.success  = false;



  // Form data for the login modal
  $scope.loginData = {};


  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/User/login.html', {
    id : 1,
    scope: $scope
  }).then(function(modal) {
    $scope.modal1 = modal;
  });

  // Open the login modal
  $scope.login = function() {
    $scope.modal1.show();
  };

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal1.hide();
  };

  

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log($scope);
    var user = UserService.authentification($scope.loginData.inputMail, $scope.loginData.inputPassword );
    console.log(user);
    

	

    if(user.response === false){
      LocalStorageService.remove("user");
      //LocalStorageService.remove("user");
      $scope.message = user.apiErrorMessage;
	  $scope.statusCo = verifierConnection();
    }else{
      LocalStorageService.save({'user': user.response });
      $scope.message = "";
      $scope.statusCo = verifierConnection();
      $scope.closeLogin();
      //$state.transitionTo("app.recetteAll");
      //$location.path("app.recetteAll");
    }

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
	


  

//##############################








});





/*	//Methode ou on recoit les données qu'on vt
	$scope.submit = function(){
		$scope.searchs = UserService.authentification($scope.inputMail, $scope.inputPassword ).success(
			function(data){
				console.log("controlleur valeur recu", data);

			}
		).error(
			function(data){
				console.log("controlleur error valeur recu", data);
			}
		);
		console.log('apres :', $scope.searchs);
	} 
	
	$scope.showHtml = function(stringHtml){
		return $sce.trustAsHtml(stringHtml);
	}*/