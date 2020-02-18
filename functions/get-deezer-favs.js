const request = require("request");
const headers = {
  'Access-Control-Allow-Origin': '*'
}

exports.handler = (event, context, callback) => {
  const id = event.queryStringParameters.id
  const TRACKS_URL = `https://api.deezer.com/user/${id}/tracks`;

  request.get(TRACKS_URL, (error, response, body) => {
    if(error) {
      callback(null, {
        statusCode: 500,
        body: "Error at server",
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
