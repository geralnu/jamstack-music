const request = require("request");
const headers = {
  'Access-Control-Allow-Origin': '*'
}

exports.handler = (event, context, callback) => {
  const id = event.queryStringParameters.id;
  const TRACKS_URL = `https://api.deezer.com/user/${id}`;

  request.get(TRACKS_URL, (error, response, body) => {
    if(error) {
      callback(null, {
        statusCode: 404,
        body: "User does not exist",
        headers
      })
    }

    callback(null, {
      statusCode: 200,
      body,
      headers
    })
  })
}
