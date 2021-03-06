(function() {
	'use strict';
	angular.module('app')
	.controller('webAppController', webAppController);

	webAppController.$inject = ['emailFactory', '$http'];

	function webAppController(emailFactory, $http) {
		var vm = this;

		
	//-------------------------------------------------------------------------//
	

	vm.sendEmail = function() {

	if(vm.transactionsYes === true) {
	vm.transactionsYes = "Debit/credit transactions: Yes";}
	
	if(vm.transactionsNo === true) {
	vm.transactionsNo = "Debit/credit transactions: No";}

	if(vm.copyrightYes === true) {
	vm.copyrightYes = "Copyright: Yes";}

	if(vm.copyrightNo === true) {
	vm.copyrightNo = "Copyright: No";}

	if(vm.LLC === true) {
	vm.LLC = "Business operation: LLC";}

	if(vm.inc === true) {
	vm.inc = "Business operation: Inc.";}

	if(vm.corporate === true) {
	vm.corporate = "Business operation: Corporate";}

	if(vm.sp === true) {
	vm.sp = "Business operation: Sole Propietorship";}

	if(vm.facebook === true) {
	vm.facebook = "Social Media: Facebook";}

	if(vm.twitter === true) {
	vm.twitter = "Social Media: Twitter";}

	if(vm.instagram === true) {
	vm.instagram = "Social Media: Instagram";}

	if(vm.linkedin === true) {
	vm.linkedin = "Social Media: LinkedIn";}


	var data = {
		name: vm.contact, 
		phone: vm.phone,
		email: vm.email,
		business: vm.business,
		description: vm.desc,
		examples: vm.examples,
		date: vm.date,
		transactionsYes: vm.transactionsYes,
		transactionsNo: vm.transactionsNo,
		copyrightYes: vm.copyrightYes,
		copyrightNo: vm.copyrightNo,
		LLC: vm.LLC,
		corporate: vm.corporate,
		inc: vm.inc,
		sole: vm.sp,
		ads: vm.ads,
		marketEmail: vm.marketEmail,
		facebook: vm.facebook,
		twitter: vm.twitter,
		instagram: vm.instagram,
		linkedin: vm.linkedin,
		comments: vm.comments
	};


	$http.post('/api/Email/send', data).success(function(res){
	vm.contact = "";
	vm.phone = "";
	vm.email = "";
	vm.business = "";
	vm.desc = "";
	vm.examples = "";
	vm.date = "";
	vm.transactionsYes = "";
	vm.transactionsNo = "";
	vm.copyrightYes = "";
	vm.copyrightNo = "";
	vm.LLC = "";
	vm.corporate = "";
	vm.inc = "";
	vm.sp = "";
	vm.ads = "";
	vm.marketEmail = "";
	vm.facebook = "";
	vm.twitter = "";
	vm.instagram = "";
	vm.linkedin = "";
	vm.comments = "";

	Materialize.toast('Web App request submitted, you will be contacted soon!', 3000);
	});
};
	

	//-------------------------------------------------------------------------//
	}
})();