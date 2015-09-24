# hm-read-more
> AngularJS directive that adds read more / read less links to your text when it exeeds certain limit of characters


## Install client side
```bash
$ bower install angular-read-more --save-dev 
```

## How to use - HTML
```
<hm-read-more
		hm-text="{{ text }}" 
		hm-limit="100" 
		hm-more-text="read more" 
		hm-less-text="read less">
</hm-read-more>
```

* `hm-text` - text
* `hm-limit` - number of maximum characters before adding "..." and the more/less text. Default: unlimited
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

## Example
See the [example folder](example)

##Demo
[Plnkr Demo](http://plnkr.co/7ggKNRw7nwCLmPN0y4Az)

##License
angular-read-more is licensed under the MIT license.
