/**
 * Module dependencies.
 */

var nconf = require('nconf');

/**
 * Expose `env`.
 */

module.exports = nconf;

/**
 * `.env` location path.
 *
 * @type {String}
 */

var path = null;

/**
 * Extend `nconf` with location.
 *
 * @api public
 */

nconf.location = function location(p) {
  if (path) return path;

  path = p || '.';

  this.file({file: path + '/.env'});
};
