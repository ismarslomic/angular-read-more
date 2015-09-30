# hm-read-more
> AngularJS directive that limit text and adds read more / read less links to your text when it exeeds certain limit of characters


## Install client side
```bash
$ bower install angular-read-more --save-dev 
```

## Include bower module
```html
<script src="/bower_components/angular-read-more/readmore.min.js"></script>
```

## Example
```bash
$ git clone
$ npm install
$ bower install
$ gulp watch
```

## How to use in HTML
As element
```
<hm-read-more
		hm-text="{{ text }}" 
		hm-limit="100" 
		hm-more-text="read more" 
		hm-less-text="read less">
</hm-read-more>
```

As attribute
```
<div hm-read-more
		hm-text="{{ text }}" 
		hm-limit="100" 
		hm-more-text="read more" 
		hm-less-text="read less">
</div>
```

* `hm-text` - full text
* `hm-limit` - number > 0 of maximum characters before adding "..." and the more/less text. Default: unlimited
* `hm-more-text` - link text for read more. Default: Read more
* `hm-less-text` - link text for read less. Default: Read less
* `hm-more-class` - css class for read more link
* `hm-less-class` - css class for read less link

## Build locally
```bash
$ npm install 
$ gulp build
$ gulp test
```

##Demo
[Plnkr Demo](http://plnkr.co/7ggKNRw7nwCLmPN0y4Az)

##License
angular-read-more is licensed under the MIT license.
