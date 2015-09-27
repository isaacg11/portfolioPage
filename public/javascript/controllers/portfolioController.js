(function() {
	'use strict';
	angular.module('app')
	.controller('portfolioController', portfolioController);

	portfolioController.$inject = [];

	function portfolioController() {
		var vm = this;

		 jQuery(document).ready(function(){
      jQuery('.slider').slider({full_width: true});
    });

	}
})();