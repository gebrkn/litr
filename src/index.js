const parser = require('./parser.generated');

module.exports.parse = function parse(str) {
    try {
        return parser.parse(str);
    } catch (err) {
        let msg = 'Unexpected token';

        if (err.found) {
            msg += ' ' + JSON.stringify(err.found);
        }

        if (err.location) {
            msg += ` at ${err.location.start.line}:${err.location.start.column}`;
        }

        throw new SyntaxError(msg)

    }
};
