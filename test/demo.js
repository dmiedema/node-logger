var logger = require('../lib/node-logger').logger(module, true);
logger.info('Info message');
logger.debug('Debug message');
logger.warn('Warning message');
logger.error('Error message');
logger.trace('Trace message');
