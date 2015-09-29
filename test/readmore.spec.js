describe('hmReadMore', function () {
	var element, scope, controller;
	var text100 = 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed in',
		text99 = 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed i',
		text101 = 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed int',
		text200 = 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed ' +
			'into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could se';

	beforeEach(module('hm.readmore'));

	// Inject files defined in files array from karma.conf.js file
	beforeEach(inject(function ($compile, $rootScope) {
		scope = $rootScope.$new();
		compile = $compile;
	}));

	it('should assign element attributes to the directive controller', function () {
		element = compile('<hm-read-more hm-text="' + text99 + '" hm-limit="100" hm-more-text="My read more" ' +
			'hm-less-text="My read less" hm-more-class="more-class" hm-less-class="less-class"></hm-read-more>')(scope);
		scope.$digest();
		controller = element.controller('hmReadMore');
		expect(controller.hmText).toEqual(text99);
		expect(controller.hmLimit).toEqual('100');
		expect(controller.hmMoreText).toEqual('My read more');
		expect(controller.hmLessText).toEqual('My read less');
		expect(controller.hmMoreClass).toEqual('more-class');
		expect(controller.hmLessClass).toEqual('less-class');
	});

	it('should set default moreText, lessText and limit', function () {
		element = compile('<hm-read-more hm-text="' + text99 + '"></hm-read-more>')(scope);
		scope.$digest();
		controller = element.controller('hmReadMore');
		expect(controller.hmText).toEqual(text99);
		expect(controller.initialText).toEqual(text99);
		expect(controller.remainingText).toBeUndefined('');

		expect(controller.hmLimit).toBeUndefined();
		expect(controller.hmMoreText).toEqual('Read more');
		expect(controller.hmLessText).toEqual('Read less');
		expect(controller.hmMoreClass).toBeUndefined();
		expect(controller.hmLessClass).toBeUndefined();
	});

	it('should not show toggle button given limit not set', function () {
		element = compile('<hm-read-more hm-text="' + text99 + '"></hm-read-more>')(scope);
		scope.$digest();
		controller = element.controller('hmReadMore');
		expect(controller.initialText).toEqual(text99);
		expect(controller.toggleText).toBeUndefined();
		expect(controller.toggleDots).toBeUndefined();
	});

	it('should not show toggle button given limit equal 0', function () {
		element = compile('<hm-read-more hm-text="' + text99 + '" hm-limit="0"></hm-read-more>')(scope);
		scope.$digest();
		controller = element.controller('hmReadMore');
		expect(controller.initialText).toEqual(text99);
		expect(controller.toggleText).toBeUndefined();
		expect(controller.toggleDots).toBeUndefined();
	});

	it('should not show toggle button given hmText length < hm-limit', function () {
		element = compile('<hm-read-more hm-text="' + text99 + '" hm-limit="100"></hm-read-more>')(scope);
		scope.$digest();
		controller = element.controller('hmReadMore');
		expect(controller.showRemainingText).toBeFalsy();
		expect(controller.initialText).toEqual(text99);
		expect(controller.toggleText).toBeUndefined();
		expect(controller.toggleDots).toBeUndefined();
	});

	it('should not show toggle button given hmText length == hm-limit', function () {

	});

	it('should not show toggle button given hmText length > hm-limit', function () {

	});

	it('should work as an element', function () {
	});

	it('should work as an attribute', function () {
	});

	it('should require value in hm-text attribute', function () {
	});

	it('should use "Read more" as default text given hm-more-text attribute is empty', function () {

	});

	it('should use "Read less" as default text given hm-less-text attribute is empty', function () {

	});

	it('should not limit text value given hm-limit is empty', function () {

	});

});
