/*
 * angular-read-more v1.0.0
 * (c) 2014-2015 Hitesh Modha
 * License: MIT
 */

'use strict';

angular
	.module('hm.readmore', ['ngAnimate'])
	.directive('hmReadMore', readMore)
	.config(function ($logProvider) {
		$logProvider.debugEnabled(false);
	});

/** @ngInject */
function readMore($templateCache) {
	var directive = {
		restrict: 'AE',
		scope: {
			hmText: '@',
			hmLimit: '@',
			hmMoreText: '@',
			hmLessText: '@',
			hmDotsClass: '@',
			hmLinkClass: '@'
		},
		template: $templateCache.get('readmore.template.html'),
		controller: hmReadMoreController,
		controllerAs: 'vm',
		bindToController: true
	};

	return directive;

	/** @ngInject */
	// "bindToController: true" binds scope variables to Controller
	function hmReadMoreController($filter, $scope, $log) {
		var vm = this;
		vm.toggle = {
			dots: '...',
			dotsClass: vm.hmDotsClass,
			linkClass: vm.hmLinkClass
		}

		// Toggle functions
		function setToggleMoreText() {
			$log.debug('setToggleMoreText');
			vm.toggle.moreText = vm.hmMoreText || 'Read more';
		}

		function setToggleLessText() {
			$log.debug('setToggleLessText');
			vm.toggle.lessText = vm.hmLessText || 'Read less';
		}

		function setCurrentToggleText() {
			$log.debug('setCurrentToggleText');
			vm.toggle.text = vm.toggle.state ? vm.toggle.lessText : vm.toggle.moreText;
		}

		function setShowToggle() {
			$log.debug('setShowToggle');
			vm.toggle.show = vm.moreText && vm.moreText.length > 0;
		}

		vm.doToggle = function () {
			$log.debug('doToggle');
			vm.toggle.state = !vm.toggle.state;
			vm.showMoreText = !vm.showMoreText;
			setCurrentToggleText();
		}

		$scope.$watch('vm.hmMoreText', function (newValue, oldValue) {
			if (newValue != oldValue) {
				$log.debug('hmMoreText changed');
				setToggleMoreText();
				setCurrentToggleText();
			}
		});

		$scope.$watch('vm.hmLessText', function (newValue, oldValue) {
			if (newValue != oldValue) {
				$log.debug('hmLessText changed');
				setToggleLessText();
				setCurrentToggleText();
			}
		});

		$scope.$watch('vm.hmDotsClass', function (newValue, oldValue) {
			if (newValue != oldValue) {
				$log.debug('hmDotsClass changed');
				vm.toggle.dotsClass = vm.hmDotsClass;
			}
		});

		$scope.$watch('vm.hmLinkClass', function (newValue, oldValue) {
			if (newValue != oldValue) {
				$log.debug('hmLinkClass changed');
				vm.toggle.linkClass = vm.hmLinkClass;
			}
		});

		// ----------

		// If negative number, set to undefined
		function validateLimit() {
			$log.debug('validateLimit');
			vm.hmLimit = (vm.hmLimit && vm.hmLimit <= 0) ? undefined : vm.hmLimit;
		}

		function getMoreTextLimit() {
			$log.debug('getMoreTextLimit');
			return vm.hmLimit && vm.hmLimit < vm.hmText.length ? vm.hmLimit - vm.hmText.length : 0;
		}

		function setLessAndMoreText() {
			$log.debug('setLessAndMoreText');
			vm.lessText = $filter('limitTo')(vm.hmText, vm.hmLimit);
			vm.moreText = $filter('limitTo')(vm.hmText, getMoreTextLimit());
		}

		function initialize() {
			$log.debug('initialize');
			setToggleMoreText();
			setToggleLessText();
			validateLimit();
			setLessAndMoreText();
			setShowToggle();
			setCurrentToggleText();
		}

		initialize();

		$scope.$watch('vm.hmText', function (newValue, oldValue) {
			if (newValue != oldValue) {
				$log.debug('hmText changed');
				validateLimit();
				setLessAndMoreText();
				setShowToggle();
			}
		});

		$scope.$watch('vm.hmLimit', function (newValue, oldValue) {
			if (newValue != oldValue) {
				$log.debug('hmLimit changed');
				validateLimit();
				setLessAndMoreText();
				setShowToggle();
			}
		});
	}
};

angular.module("hm.readmore").run(["$templateCache", function($templateCache) {$templateCache.put("readmore.template.html","<span name=\"text\">\n	<span>{{ vm.lessText }}</span><span ng-show=\"vm.showMoreText\" class=\"more-show-hide\">{{ vm.moreText }}</span>\n</span>\n\n<span name=\"toggle\" ng-show=\"vm.toggle.show\">\n	<span ng-class=\"vm.toggle.dotsClass\" ng-show=\"!vm.toggle.state\">{{ vm.toggle.dots }}</span>\n	<a ng-class=\"vm.toggle.linkClass\" ng-click=\"vm.doToggle()\">{{ vm.toggle.text }}</a>\n</span>\n");}]);