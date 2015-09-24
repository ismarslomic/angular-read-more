describe('hmReadMore', function () {
	var element, scope;
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

	it('should be compiled', function () {
		element = compile('<hm-read-more hm-text="' + text99 +
			'" hm-limit="100" hm-more-text="Read more" hm-less-text="Read less"></hm-read-more>')(scope);
		scope.$digest();
		expect(element.html()).not.toEqual(null);
	});

	it('should work as an element', function () {
		element = compile('<hm-read-more hm-text="' + text99 + '" hm-limit="100" hm-more-text="Read more" hm-less-text="Read less"></hm-read-more>')(scope);
		scope.$digest();
		expect(element.find('span').text()).toEqual(text99);
	});

	it('should work as an attribute', function () {
		element = compile('<div hm-read-more hm-text="' + text99 + '" hm-limit="100" hm-more-text="Read more" hm-less-text="Read less"></div>')(scope);
		scope.$digest();
		expect(element.find('span').text()).toEqual(text99);
	});

	it('should require value in hm-text attribute', function () {
	});

	it('should use "Read more" as default text given hm-more-text attribute is empty', function () {

	}); 

	it('should use "Read less" as default text given hm-less-text attribute is empty', function () {

	});

	it('should not limit text value given hm-limit is empty', function () {

	});

	it('should not display three dots given text length < hm-limit attribute', function () {

	});

	it('should not display three dots given text length == hm-limit attribute', function () {

	});

	it('should  display three dots given text length > hm-limit attribute', function () {

	});
});
