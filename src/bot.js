import botBuilder from 'claudia-bot-builder';

const response = (message, response_type = 'in_channel') => {
    return {
        'response_type': response_type,
        text: 'Thanks for sending ' + message  + 
      '. I\'m still under construction! :) '
    }
}

module.exports = botBuilder(function (request) {
  return response(request.text);
});