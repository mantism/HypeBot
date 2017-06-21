'use strict';

var _claudiaBotBuilder = require('claudia-bot-builder');

var _claudiaBotBuilder2 = _interopRequireDefault(_claudiaBotBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var response = function response(message) {
    var response_type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'in_channel';

    return {
        'response_type': response_type,
        text: 'Thanks for sending ' + message + '. I\'m still under construction! :) '
    };
};

module.exports = (0, _claudiaBotBuilder2.default)(function (request) {
    return response(request.text);
});
