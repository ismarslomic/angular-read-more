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
	function ReadMoreController($filter) {
		var vm = this;
		vm.hmMoreText = vm.hmMoreText || 'Read more';
		vm.hmLessText = vm.hmLessText || 'Read less';
		vm.hmLimit = vm.hmLimit || undefined;

		show();

		vm.toggle = function () {
			switch (vm.toggleState) {
				case 'less':
					showMore();
					break;
				default:
					showLess();
			}
		}

		function show(){
			if(vm.hmLimit && vm.hmLimit > 0){
				vm.initialText = $filter('limitTo')(vm.hmText, vm.hmLimit);
				showLess();
			}
			else
			{
				vm.initialText = vm.hmText;
			}

		}

		function showMore() {
			vm.remainingText = $filter('limitTo')(vm.hmText, (vm.hmLimit - vm.hmText.length));
			vm.toggleState = 'more';
			vm.toggleDots = '';
			vm.toggleText = vm.hmLessText;
		}

		function showLess() {
			vm.remainingText = '';
			vm.toggleState = 'less';
			vm.toggleDots = '...';
			vm.toggleText = vm.hmMoreText;
		}
	}
};
