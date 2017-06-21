const botBuilder = require('claudia-bot-builder')

module.exports = botBuilder(function (request) {
  return 'Thanks for sending ' + request.text  + 
      '. I\'m still under construction! :) '
});