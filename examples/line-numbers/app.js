require.paths.unshift('../../lib');

var logger = require('node-logger').logger(module, true);
var logger_noLineNumber = require('node-logger').logger(module, true, false);

logger.info('Info message');
logger.debug('Debug message');
logger.warn('Warning message');
logger.error('Error message');
logger.trace('Trace message');


logger_noLineNumber.info('Info message');
logger_noLineNumber.debug('Debug message');
logger_noLineNumber.warn('Warning message');
logger_noLineNumber.error('Error message');
logger_noLineNumber.trace('Trace message');
