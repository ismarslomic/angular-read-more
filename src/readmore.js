/*
 * angular-read-more v1.0.0
 * (c) 2014-2015 Hitesh Modha
 * License: MIT
 */

'use strict';

angular
	.module('hm.readmore', ['ngAnimate'])
	.directive('hmReadMore', readMore);

/** @ngInject */
function readMore($templateCache, limitToFilter) {
	var directive = {
		restrict: 'AE',
		scope: {
			hmText: '@',
			hmLimit: '@',
			hmMoreText: '@',
			hmLessText: '@',
			hmMoreClass: '@',
			hmLessClass: '@'
		},
		template: $templateCache.get('readmore.template.html'),
		controller: ReadMoreController,
		controllerAs: 'vm',
		bindToController: true
	};

	return directive;

	/** @ngInject */
	// "bindToController: true" binds scope variables to Controller
	function ReadMoreController($filter, $scope, $log) {
		var vm = this;
		vm.toggle = {
			dots: '...'
		}

		function checkIfEmptyMoreLessText(){
			vm.hmMoreText = vm.hmMoreText || 'Read more';
			vm.hmLessText = vm.hmLessText || 'Read less';
		}

		// If negative number, set to undefined
		function checkIfNegativeLimit() {
			vm.hmLimit = (vm.hmLimit && vm.hmLimit < 0) ? undefined : vm.hmLimit;
		}

		function getMoreTextLimit() {
			return vm.hmLimit && vm.hmLimit < vm.hmText.length ? vm.hmLimit - vm.hmText.length : 0;
		}

		function setToggleText() {
			vm.toggle.text = vm.toggle.state ? vm.hmLessText : vm.hmMoreText;
		}

		function splitTextToLessAndMore() {
			vm.lessText = $filter('limitTo')(vm.hmText, vm.hmLimit);
			vm.moreText = $filter('limitTo')(vm.hmText, getMoreTextLimit());
		}

		function showToggle() {
			vm.toggle.show = vm.moreText && vm.moreText.length > 0;
			setToggleText();
		}

		function textChanged() {
			splitTextToLessAndMore();
			showToggle();
		}

		function limitChanged() {
			checkIfNegativeLimit();
			splitTextToLessAndMore();
			showToggle();
		}

		function moreOrLessTextChanged() {
			checkIfEmptyMoreLessText();
			showToggle();
		}

		vm.doToggle = function () {
			vm.toggle.state = !vm.toggle.state;
			vm.showMoreText = !vm.showMoreText;
			setToggleText();
		}

		checkIfEmptyMoreLessText();
		checkIfNegativeLimit();
		splitTextToLessAndMore();
		showToggle();

		$scope.$watch('vm.hmText', function (newValue) {
			textChanged();
		}.bind(this));

		$scope.$watch('vm.hmLimit', function (newValue) {
			limitChanged();
		}.bind(this));

		$scope.$watch('vm.hmMoreText', function (newValue) {
			moreOrLessTextChanged();
		}.bind(this));

		$scope.$watch('vm.hmLessText', function (newValue) {
			moreOrLessTextChanged();
		}.bind(this));
	}
};
