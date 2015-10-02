(function() {
	'use strict';
	angular.module('app')
	.controller('webAppController', webAppController);

	webAppController.$inject = ['emailFactory', '$http'];

	function webAppController(emailFactory, $http) {
		var vm = this;
	//-------------------------------------------------------------------------//
	vm.sendEmail = function() {

	var data = {
		name: vm.contactName,
		email: vm.email,
		message: vm.message
	};

	$http.post('/api/Email/send', data).success(function(res){
	Materialize.toast('Web App request submitted!', 3000);
	});
};
	//-------------------------------------------------------------------------//
	}
})();