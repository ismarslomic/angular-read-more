# hm-read-more
[![Build Status](https://travis-ci.org/ismarslomic/angular-read-more.svg?branch=master)](https://travis-ci.org/ismarslomic/angular-read-more)
[![Coverage Status](https://coveralls.io/repos/ismarslomic/angular-read-more/badge.svg?branch=master&service=github)](https://coveralls.io/github/ismarslomic/angular-read-more?branch=master)
[![Dependency Status](https://gemnasium.com/ismarslomic/angular-read-more.svg)](https://gemnasium.com/ismarslomic/angular-read-more)
> AngularJS directive that limit text and adds read more / read less links to your text when it exeeds certain limit of characters. No requirements to JQuery. Angular animations are used for fade in/out.

## Codepen demo
[Codepen demo](http://codepen.io/ismarslomic/pen/yYMvrz "Codepen.io: AngularJS Read More Directive")
![AngularJS Read More](angular-read-more.png "AngularJS Read More Directive")

## Install client side
```bash
$ bower install angular-read-more --save-dev 
```

Note that [angular-sanitize](https://docs.angularjs.org/api/ngSanitize/service/$sanitize) is required since this directive is allowing HTML tags to be used in text.

## Run example locally
```bash
$ git clone
$ npm install
$ bower install
$ gulp watch
```

## Test locally
```bash
$ git clone
$ npm install
$ bower install
$ gulp karma
```

## How to use in HTML
Include JS script
```html
<script src="//cdnjs.cloudflare.com/ajax/libs/angular-sanitize/1.6.4/angular-sanitize.min.js"></script>
<script src="/bower_components/angular-read-more/readmore.min.js"></script>
```

Add the module to your app,
```html
angular.module("app", ["hm.readmore"]);
```

As element
```html
<hm-read-more
		hm-text="{{ text }}" 
		hm-limit="100" 
		hm-more-text="read more" 
		hm-less-text="read less"
		hm-dots-class="dots"
        hm-link-class="links">
</hm-read-more>
```

As attribute
```html
<div hm-read-more
		hm-text="{{ text }}" 
		hm-limit="100" 
		hm-more-text="read more" 
		hm-less-text="read less"
		hm-dots-class="dots"
        hm-link-class="links">
</div>
```

* `hm-text` - full text
* `hm-limit` - number > 0 of maximum characters before adding "..." and the more/less text. Default: unlimited
* `hm-more-text` - link text for read more. Default: Read more
* `hm-less-text` - link text for read less. Default: Read less
* `hm-dots-class` - css class for dots
* `hm-link-class` - css class for links of read more/read less text

## License
angular-read-more is licensed under the MIT license.

## Release new Github and Bower version
```bash
gulp bump
gulp build
git add .
git commit -m ""
git push
```
Use Github UI to create new tag and release

## Register bower package for the first time
```bash
bower register angular-read-more git://github.com/ismarslomic/angular-read-more.git
```
