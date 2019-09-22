// function to send a json object
const respondJSON = (request, response, status, object) => {
  // set status code and content type (application/json)
  response.writeHead(status, { 'Content-Type': 'application/json' });
  // stringify the object (so it doesn't use references/pointers/etc)
  // but is instead a flat string object.
  // Then write it to the response.
  response.write(JSON.stringify(object));
  // Send the response to the client
  response.end();
};


// function to send response
const respond = (request, response, content, status) => {
  // set status code (200 success) and content type
  response.writeHead(status, { 'Content-Type': 'text/xml' });
  // write the content string or buffer to response
  response.write(content);
  // send the response to the client
  response.end();
};

// function to show a success status code
const success = (request, response, acceptedTypes) => {
  // message to send
  const responseJSON = {
    message: 'This is a successful response',
  };

  if (acceptedTypes[0] === 'text/xml') {
    // create a valid XML string with name and age tags.
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>This is a successful response</message>`;
    responseXML = `${responseXML} <id>success</id>`;
    responseXML = `${responseXML} </response>`;

    // return response passing out string and content type
    return respond(request, response, responseXML, 200);
  }
  // send our json with a success status code
  return respondJSON(request, response, 200, responseJSON);
};

// function to show a bad request without the correct parameters
const badRequest = (request, response, acceptedTypes, params) => {
  // message to send
  const responseJSON = {
    message: 'This request has the required parameters',
  };

  // if the request does not contain a valid=true query parameter
  if (!params.valid || params.valid !== 'true') {
    // set our error message
    responseJSON.message = 'Missing valid query parameter set to true';
    // give the error a consistent id
    responseJSON.id = 'badRequest';
    // return our json with a 400 bad request code

    if (acceptedTypes[0] === 'text/xml') {
      // create a valid XML string with name and age tags.
      let responseXML = '<response>';
      responseXML = `${responseXML} <message>Missing valid query parameter set to true</message>`;
      responseXML = `${responseXML} <id>badRequest</id>`;
      responseXML = `${responseXML} </response>`;

      // return response passing out string and content type
      return respond(request, response, responseXML, 400);
    }

    return respondJSON(request, response, 400, responseJSON);
  }

  if (acceptedTypes[0] === 'text/xml') {
    // create a valid XML string with name and age tags.
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>This request has the required parameters</message>`;
    responseXML = `${responseXML} <id>badRequest</id>`;
    responseXML = `${responseXML} </response>`;

    // return response passing out string and content type
    return respond(request, response, responseXML, 200);
  }

  // if the parameter is here, send json with a success status code
  return respondJSON(request, response, 200, responseJSON);
};

// function to show a bad request without the correct parameters
const unauthorized = (request, response, acceptedTypes, params) => {
  // message to send
  const responseJSON = {
    message: 'This request has the required parameters',
  };

  // if the request does not contain a valid=true query parameter
  if (!params.valid || params.valid !== 'true') {
    // set our error message
    responseJSON.message = 'Missing valid query parameter set to true';
    // give the error a consistent id
    responseJSON.id = 'badRequest';
    // return our json with a 400 bad request code

    if (acceptedTypes[0] === 'text/xml') {
      // create a valid XML string with name and age tags.
      let responseXML = '<response>';
      responseXML = `${responseXML} <message>Missing valid query parameter set to true</message>`;
      responseXML = `${responseXML} <id>unauthorized</id>`;
      responseXML = `${responseXML} </response>`;

      // return response passing out string and content type
      return respond(request, response, responseXML, 401);
    }

    return respondJSON(request, response, 401, responseJSON);
  }

  if (acceptedTypes[0] === 'text/xml') {
    // create a valid XML string with name and age tags.
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>This request has the required parameters</message>`;
    responseXML = `${responseXML} <id>unauthorized</id>`;
    responseXML = `${responseXML} </response>`;

    // return response passing out string and content type
    return respond(request, response, responseXML, 200);
  }

  // if the parameter is here, send json with a success status code
  return respondJSON(request, response, 200, responseJSON);
};

// function to show a success status code
const forbidden = (request, response, acceptedTypes) => {
   console.dir('forbidden');
  // message to send
  const responseJSON = {
    message: 'Forbidden',
    id: 'forbidden',
  };

  if (acceptedTypes[0] === 'text/xml') {
    // create a valid XML string with name and age tags.
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>Forbidden</message>`;
    responseXML = `${responseXML} <id>forbidden</id>`;
    responseXML = `${responseXML} </response>`;

    // return response passing out string and content type
    return respond(request, response, responseXML, 403);
  }

  // send our json with a success status code
  return respondJSON(request, response, 403, responseJSON);
};


const internal = (request, response, acceptedTypes) => {
  // message to send
  const responseJSON = {
    message: 'internal',
    id: 'internal',
  };

  if (acceptedTypes[0] === 'text/xml') {
    // create a valid XML string with name and age tags.
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>Internal</message>`;
    responseXML = `${responseXML} <id>internal</id>`;
    responseXML = `${responseXML} </response>`;

    // return response passing out string and content type
    return respond(request, response, responseXML, 500);
  }

  // send our json with a success status code
  return respondJSON(request, response, 500, responseJSON);
};

const notImplemented = (request, response, acceptedTypes) => {
  // message to send
  const responseJSON = {
    message: 'Not Implemented',
    id: 'notImplemented',
  };

  if (acceptedTypes[0] === 'text/xml') {
    // create a valid XML string with name and age tags.
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>Not Implemented</message>`;
    responseXML = `${responseXML} <id>notImplemented</id>`;
    responseXML = `${responseXML} </response>`;

    // return response passing out string and content type
    return respond(request, response, responseXML, 501);
  }

  // send our json with a success status code
  return respondJSON(request, response, 501, responseJSON);
};


// function to show not found error
const notFound = (request, response, acceptedTypes) => {
  // error message with a description and consistent error id
  const responseJSON = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  };

  if (acceptedTypes[0] === 'text/xml') {
    // create a valid XML string with name and age tags.
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>The page you are looking for was not found</message>`;
    responseXML = `${responseXML} <id>notFound</id>`;
    responseXML = `${responseXML} </response>`;

    // return response passing out string and content type
    return respond(request, response, responseXML, 404);
  }

  // return our json with a 404 not found error code
  return respondJSON(request, response, 404, responseJSON);
};

// exports to set functions to public.
// In this syntax, you can do getIndex:getIndex, but if they
// are the same name, you can short handle to just getIndex,
module.exports = {
  success,
  badRequest,
  forbidden,
  internal,
  notFound,
  notImplemented,
  unauthorized,
};
