'use strict';

application.service('LocalStorageService', function ($rootScope, $window){

	/**
	* Save data in localStorage
	* 
	* @param Object data : {"key": "value" [,"key": "value"]}
	* @return Boolean : true if recorded
	*/
	function save(data){
		
		if(typeof data === 'object'){
			for (var key in data) {
				if(data.hasOwnProperty(key)){
					var value = data[key];
					if(typeof value === 'object'){
						value = JSON.stringify(value);
					}
					$window.localStorage.setItem(key, value);
				}
			}
			$rootScope.$broadcast('LocalStorageUpdated');
			return true;
		}
		return false;
	}

	/**
	* Get value in localStorage
	* 
	* @param String key 
	* @return String/Int/Object/Undefined
	*/
	function get(key){

		var output;
		try{
			output = JSON.parse($window.localStorage[key]);
		}catch(err){
			output = $window.localStorage[key];
			console.log("get",output);
		}
		//alert(output);
		return output;
	}

	/**
	* Check if key exist
	* 
	* @param String key 
	* @return Boolean : true if exist
	*/
	function isKey(key){
		try{
			if ($window.localStorage.getItem(key)) {
				return true;
			}
		}catch(err){
			return false;
		}
		return false;
	}

	/**
	* Remove item
	* 
	* @param String key 
	* @return Boolean
	*/
	function remove(key){
		try{
			$window.localStorage.removeItem(key);
			$rootScope.$broadcast('LocalStorageUpdated');
			return true;
		}catch(err){
			return false;
		}
		return false;
	}

	/**
	* Supprimer toute les clefs du local storage
	*  
	* @return Boolean
	*/
	function flush(){
		try{
			$window.localStorage.clear();
			$rootScope.$broadcast('LocalStorageUpdated');
			return true;
		} catch(err){
			return false;
		}
		return false;

	}


	/**
	* Retourne les fonction publique
	*/
	return {
		get 	: get,
		save 	: save,
		isKey 	: isKey,
		remove 	: remove,
		flush 	: flush
	};	
});