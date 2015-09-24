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
			hmFulltext: '@',
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
	function ReadMoreController() {
		var vm = this;

		// "vm.hmfulltext" is avaible by directive option "bindToController: true"
		vm.toggleValue = function () {
			if (vm.hmFulltext == true)
				vm.hmFulltext = false;
			else if (vm.hmFulltext == false)
				vm.hmFulltext = true;
			else
				vm.hmFulltext = true;
		}
	}
};
