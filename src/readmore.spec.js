describe('hmReadMoreController', function () {
	var element, scope, controller;
	var text100 = 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed in',
		text50 = 'One morning, when Gregor Samsa woke from troubled ',
		text99 = 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed i'

	beforeEach(module('hm.readmore'));

	// Inject files defined in files array from karma.conf.js file
	beforeEach(inject(function ($compile, $rootScope) {
		scope = $rootScope.$new();
		compile = $compile;
	}));

	it('should assign element attributes to the directive controller', function () {
		element = compile('<hm-read-more hm-text="' + text99 + '" hm-limit="100" hm-more-text="My read more" ' +
			'hm-less-text="My read less" hm-dots-class="toggle-dots" hm-link-class="toggle-link"></hm-read-more>')(scope);
		scope.$digest();
		controller = element.controller('hmReadMore');

		expect(controller.hmText).toEqual(text99);
		expect(controller.hmLimit).toEqual('100');
		expect(controller.hmMoreText).toEqual('My read more');
		expect(controller.hmLessText).toEqual('My read less');
		expect(controller.hmDotsClass).toEqual('toggle-dots');
		expect(controller.hmLinkClass).toEqual('toggle-link');
	});

	it('should set default value for toggle.moreText if not set', function () {
		element = compile('<hm-read-more hm-text="' + text99 + '"></hm-read-more>')(scope);
		scope.$digest();
		controller = element.controller('hmReadMore');

		expect(controller.toggle.moreText).toEqual('Read more');
	});

	it('should set default value for toggle.lessText if not set', function () {
		element = compile('<hm-read-more hm-text="' + text99 + '"></hm-read-more>')(scope);
		scope.$digest();
		controller = element.controller('hmReadMore');

		expect(controller.toggle.lessText).toEqual('Read less');
	});

	it('should set default value for hmLimit if not set', function () {
		element = compile('<hm-read-more hm-text="' + text99 + '"></hm-read-more>')(scope);
		scope.$digest();
		controller = element.controller('hmReadMore');

		expect(controller.hmLimit).toBeUndefined();
	});

	it('should set toggle.show to false given limit not set', function () {
		element = compile('<hm-read-more hm-text="' + text99 + '"></hm-read-more>')(scope);
		scope.$digest();
		controller = element.controller('hmReadMore');

		expect(controller.moreText).toBeFalsy();
		expect(controller.lessText).toEqual(text99);
		expect(controller.toggle.show).toBeFalsy();
	});

	it('should set toggle.show to false given limit set to 0', function () {
		element = compile('<hm-read-more hm-text="' + text99 + '" hm-limit="0"></hm-read-more>')(scope);
		scope.$digest();
		controller = element.controller('hmReadMore');

		expect(controller.moreText).toBeFalsy();
		expect(controller.lessText).toEqual(text99);
		expect(controller.toggle.show).toBeFalsy();
	});

	it('should set toggle.show to false given hmText.length < hmLimit', function () {
		element = compile('<hm-read-more hm-text="' + text99 + '" hm-limit="100"></hm-read-more>')(scope);
		scope.$digest();
		controller = element.controller('hmReadMore');

		expect(controller.moreText).toBeFalsy();
		expect(controller.lessText).toEqual(text99);
		expect(controller.toggle.show).toBeFalsy();
	});

	it('should set toggle.show to false given hmText.length == hmLimit', function () {
		element = compile('<hm-read-more hm-text="' + text99 + '" hm-limit="99"></hm-read-more>')(scope);
		scope.$digest();
		controller = element.controller('hmReadMore');

		expect(controller.moreText).toBeFalsy();
		expect(controller.lessText).toEqual(text99);
		expect(controller.toggle.show).toBeFalsy();
	});

	it('should set toggle.show to true given hmText.length > hmLimit', function () {
		element = compile('<hm-read-more hm-text="' + text100 + '" hm-limit="99"></hm-read-more>')(scope);
		scope.$digest();
		controller = element.controller('hmReadMore');

		expect(controller.moreText).toEqual('n');
		expect(controller.lessText).toEqual(text99);
		expect(controller.toggle.show).toBeTruthy();
	});

	it('should work as an element', function () {
		element = compile('<hm-read-more hm-text="' + text100 + '" hm-limit="99"></hm-read-more>')(scope);
		scope.$digest();
		controller = element.controller('hmReadMore');

		expect(controller.moreText).toEqual('n');
		expect(controller.lessText).toEqual(text99);
		expect(controller.toggle.show).toBeTruthy();
	});

	it('should work as an attribute', function () {
		element = compile('<div hm-read-more hm-text="' + text100 + '" hm-limit="99"></div>')(scope);
		scope.$digest();
		controller = element.controller('hmReadMore');

		expect(controller.moreText).toEqual('n');
		expect(controller.lessText).toEqual(text99);
		expect(controller.toggle.show).toBeTruthy();
	});

	it('should watch for changes in hmText', function () {
		element = compile('<hm-read-more hm-text="' + text100 + '"></hm-read-more>')(scope);
		scope.$digest();
		controller = element.controller('hmReadMore');

		expect(controller.lessText).toEqual(text100);

		controller.hmText = 'new hmText';
		element.scope().$apply();

		expect(controller.lessText).toEqual('new hmText');
	});

	it('should watch for changes in hmLimit', function () {
		element = compile('<hm-read-more hm-text="' + text100 + '" hm-limit="100"></hm-read-more>')(scope);
		scope.$digest();
		controller = element.controller('hmReadMore');

		expect(controller.lessText).toEqual(text100);
		expect(controller.moreText).toBeFalsy();

		controller.hmLimit = 50;
		element.scope().$apply();

		expect(controller.lessText).toEqual(text50);
		expect(controller.moreText).toEqual('dreams, he found himself transformed in his bed in');
	});

	it('should watch for changes in hmMoreText', function () {
		element = compile('<hm-read-more hm-text="' + text100 + '" hm-more-text="Read more"></hm-read-more>')(scope);
		scope.$digest();
		controller = element.controller('hmReadMore');

		expect(controller.hmMoreText).toEqual('Read more');

		controller.hmMoreText = 'Read more2';
		element.scope().$apply();

		expect(controller.toggle.moreText).toEqual('Read more2');
	});

	it('should watch for changes in hmLessText', function () {
		element = compile('<hm-read-more hm-text="' + text100 + '" hm-less-text="Read less"></hm-read-more>')(scope);
		scope.$digest();
		controller = element.controller('hmReadMore');

		expect(controller.hmLessText).toEqual('Read less');

		controller.hmLessText = 'Read less2';
		element.scope().$apply();

		expect(controller.hmLessText).toEqual('Read less2');
	});

	it('should watch for changes in hmDotsClass', function () {
		element = compile('<hm-read-more hm-text="' + text100 + '" hm-dots-class="toggle-dots"></hm-read-more>')(scope);
		scope.$digest();
		controller = element.controller('hmReadMore');

		expect(controller.hmDotsClass).toEqual('toggle-dots');

		controller.hmDotsClass = 'toggle-dots2';
		element.scope().$apply();

		expect(controller.toggle.dotsClass).toEqual('toggle-dots2');
	});

	it('should watch for changes in hmLinkClass', function () {
		element = compile('<hm-read-more hm-text="' + text100 + '" hm-link-class="toggle-link"></hm-read-more>')(scope);
		scope.$digest();
		controller = element.controller('hmReadMore');

		expect(controller.hmLinkClass).toEqual('toggle-link');

		controller.hmLinkClass = 'toggle-link2';
		element.scope().$apply();

		expect(controller.toggle.linkClass).toEqual('toggle-link2');
	});

	it('should show more text when toggle given less text is shown', function () {
		element = compile('<hm-read-more hm-text="' + text100 + '" hm-limit="50" hm-less-text="Read less" hm-more-text="Read more"></hm-read-more>')(scope);
		scope.$digest();
		controller = element.controller('hmReadMore');

		expect(controller.lessText).toEqual(text50);
		expect(controller.moreText).toEqual('dreams, he found himself transformed in his bed in');
		expect(controller.toggle.state).toBeFalsy();
		expect(controller.showMoreText).toBeFalsy();
		expect(controller.toggle.text).toEqual('Read more');

		controller.doToggle();

		expect(controller.lessText).toEqual(text50);
		expect(controller.moreText).toEqual('dreams, he found himself transformed in his bed in');
		expect(controller.toggle.state).toBeTruthy();
		expect(controller.showMoreText).toBeTruthy();
		expect(controller.toggle.text).toEqual('Read less');

	});

	it('should show less text when toggle given more text is shown', function () {
		element = compile('<hm-read-more hm-text="' + text100 + '" hm-limit="50" hm-less-text="Read less" hm-more-text="Read more"></hm-read-more>')(scope);
		scope.$digest();
		controller = element.controller('hmReadMore');
		controller.doToggle();

		expect(controller.lessText).toEqual(text50);
		expect(controller.moreText).toEqual('dreams, he found himself transformed in his bed in');
		expect(controller.toggle.state).toBeTruthy();
		expect(controller.showMoreText).toBeTruthy();
		expect(controller.toggle.text).toEqual('Read less');
	});
});
