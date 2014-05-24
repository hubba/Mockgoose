'use strict';

/**
 * Implementation of $lt
 * @see http://docs.mongodb.org/manual/reference/operator/query/lt/
 */
module.exports = function operation(model, update, options) {
    if (!model[options.queryItem]) {
        model[options.queryItem] = 0;
    }
    return model[options.queryItem] < update.$lt;
};
