const words = require('random-words');

exports.handler = async () => {
  let tags = words(100);
  tags = tags.map(item => `#${item}`);
  const response = {
    statusCode: 200,
    body: tags.join(' '),
  };
  return response;
};
