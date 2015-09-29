(function() {
	'use strict';
	angular.module('app')
	.controller('tutorialController', tutorialController);

	tutorialController.$inject = [];

	function tutorialController() {
		var vm = this;


		  $(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });
	}
})();