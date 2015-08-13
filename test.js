var osmosis = require('./index.js');
var debug = require('debug')('osmosis');
var args = process.argv.slice(2);
var username = args[0] || 'jmtexier';

console.log('retrieving github profile of ' + username);

osmosis
	.error(console.error)
	.log(debug)
	.debug(debug)

	.get('https://github.com/' + username)

	.set('username', 'span.vcard-username')
	.set('fullname', 'span.vcard-fullname')
	.set('location', 'li.vcard-detail[itemprop="homeLocation"]')

	.data(function(profile) {
		console.log(profile)
	});	
