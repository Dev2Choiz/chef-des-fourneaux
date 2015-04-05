chefdesfourneaux.controller('UserController', function ($scope, $sce, $timeout, $state, UserService, LocalStorageService, $ionicModal ){

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
    
    if(user.response===false){
      LocalStorageService.remove("user");
      //LocalStorageService.remove("user");
      $scope.message=user.apiErrorMessage;

    }else{
      LocalStorageService.save({'user': user.response });
      $scope.message="";
      $state.transitionTo("app.recetteAll");
      //$location.path("app.recetteAll");
    }

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
	


// ###############################

  // Form data for the login modal
  $scope.signinData = {};
console.log($scope);

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/User/signin.html', {
    id : 2,
    scope: $scope
  }).then(function(modal) {
    $scope.modal2 = modal;
  });

  // Open the signin modal
  $scope.signin = function() {
    $scope.modal2.show();
  };

  // Triggered in the signin modal to close it
  $scope.closeSignin = function() {
    $scope.modal2.hide();
  };

  
  
  $scope.showError = function (){
    //alert("ici "+errorMessage);
    return errorMessage;
  }

  /*$scope.showSuccess = function (successMessage){
    return successMessage;
  }*/



  // Perform the signin action when the user submits the signin form
  $scope.doSignin = function() {
    //alert('flfj');
    //console.log($scope);
    
    var password = $scope.signinData.inputPassword;
    var confPassword = $scope.signinData.inputConfPassword;

    if(password === confPassword){


      var user = UserService.signin($scope.signinData);
      $scope.showPanier = true;

    }else{
      $scope.errorState=true;
      errorMessage = "Les deux mots de passe entrés ne sont pas indentiques";
    }

    
    console.log("user ==>",user);
    
    /*if(user.response===false){
      LocalStorageService.remove("user");
      //LocalStorageService.remove("user");
      $scope.message=user.apiErrorMessage;

    }else{
      LocalStorageService.save({'user': user.response });
      $scope.message="";
      $state.transitionTo("app.recetteAll");
      //$location.path("app.recetteAll");
    }*/

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
  




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