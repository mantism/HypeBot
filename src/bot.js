import botBuilder from 'claudia-bot-builder';
import request from 'request';

const slackDelayedReply = botBuilder.slackDelayedReply;
/*in_channel response_type is for everybody to see
* ephemeral is for only the sender to see
*/

const helpResponse = {
  'response_type': 'ephemeral',
  'text': 'How to use /hypebot',
  'attachments': [
    {
      'text':'Sorry, you can\'t do much with me yet but I do love hype! (try /hypebot hello)'
    }
  ] 
}

const defaultResponse = {
  'response_type': 'ephemeral',
  text: 'Sorry, I don\'t understand what you mean! Please use \'/hypebot help\'' +
          'for some useful commmands!'
}

const helloResponse = (request) => {
  return {
    'response_type': 'ephemeral',
    'text': 'Hello, ' + request.user_name + '! How are you today?'
  }
}

const parseRequest = (request) => {
  const text = request.text;
  switch (text) {
    case 'help':
      return helpResponse;
    case 'hello':
      return helloResponse(request);
    //case 'love':
      //return loveResponse(request);
    default:
      return defaultResponse;
  }
}

module.exports = botBuilder(function (request) {
  return parseRequest(request.originalRequest);
});