
chefdesfourneaux.service('ModalService', function($http, $ionicModal ){


	function getModal(template, idModal, scop, animation  ){
		return $ionicModal.fromTemplateUrl(""+template, {
			id:idModal,
			/*controller: ctrl,*/
		    scope: scop,
		    animation: animation		//'slide-in-up'
		});

	};








	return ({
		getModal 					: getModal

	});




})