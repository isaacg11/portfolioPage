(function() {
	'use strict';
	angular.module('app')
	.factory('emailFactory', emailFactory);

	emailFactory.$inject = ['$http', '$q'];

	function emailFactory($http, $q) {
		var o = {};
		o.sendEmail = sendEmail;
		return o;
	//-------------------------------------------------------------------------//
	function sendEmail(request) {
    var q = $q.defer();
    $http.post('/api/Email/send', {request: request}).success(function(res) {
    q.resolve(res);
    });
    return q.promise;
    }


    //-------------------------------------------------------------------------//
	}
})();