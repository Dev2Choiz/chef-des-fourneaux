
chefdesfourneaux.service('ModalService', function($http, $ionicModal,$q ){


	function getModal(template, idModal, scop, animation  ){
		return $ionicModal.fromTemplateUrl(""+template, {
			id:idModal,
			/*controller: ctrl,*/
		    scope: scop,
		    animation: animation		//'slide-in-up'
		});

	};



	function msgBox(msg, title, scop  ){
		//var deferred = $q.defer();		//pt-etre une promesse?
		scop.dataModal=[];
		scop.dataModal.titleModal=title;
		scop.dataModal.bodyModal=msg;
		mod = $ionicModal.fromTemplateUrl("templates/Modal/msgbox.html", {
			id:2,	//		msgbox ==> modal2
		    scope: scop,
		    animation: 'slide-in-up'
		});
		mod.then(function(modal) {
		    scop.modal2= modal;
		    scop.fermerMsgbox=function(){
		    	scop.modal2.hide();
		    };
		    scop.modal2.show();

		    console.log("mod",mod);
		});
	};




	function msgBox2(msg, title, scop  ){
		scop.dataModal=[];
		scop.dataModal.titleModal=title;
		scop.dataModal.bodyModal=msg;


		$("#boiteDeDialogueDiv").dialog({
		    modal: true,
		    draggable: false,
		    resizable: false,
		    position: ['center', 'top'],
		    show: 'blind',
		    hide: 'blind',
		    width: 400,
		    async:false,
		    dialogClass: 'ui-dialog-osx',
		    buttons: {
		        "OK": function() {
		            $(this).dialog("close");
		        }
		    }
		});


	};






	return ({
		getModal 					: getModal,
		msgBox 						: msgBox,
		msgBox2 						: msgBox2

	});




})