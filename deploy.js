var url = require('./package.json').repository.url;
var ghPages = require('gh-pages');

ghPages.publish('./html', { 
	repo: url, logger: function(m) { 
		console.error(m); 
	} });
