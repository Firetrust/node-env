/**
 * Module dependencies.
 */

var nconf = require('nconf');

/**
 * Expose `env`.
 */

module.exports = nconf;

/**
 * Extend `nconf` with location.
 *
 * @api public
 */

nconf.location = function location(name) {
  this.file({file: '/etc/' + name + '.env'});
};
