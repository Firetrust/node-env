/**
 * Module dependencies.
 */

var nconf = require('nconf');
var path = require('path');

/**
 * Expose `env`.
 */

module.exports = nconf;

/**
 * Extend `nconf` with location.
 *
 * @api public
 */

nconf.location = function location(location) {
  this.file({file: path.resolve(location, '.env')});
};
