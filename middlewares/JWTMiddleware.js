const jwt = require('jsonwebtoken');
const JWT_KEY = '1158659639IFIUHSDIUSDF';

const JWTMiddleware = (request, response, next) => {
  const authorization = request.headers.authorization;
  if(!authorization) {
      next();
      return;
  }

  const token = authorization.replace('Bearer ', '');    

  try {
      const tokenPayload = jwt.verify(token, JWT_KEY);
      request.tokenPayload = tokenPayload;
      next();
  } catch (e) {
      next();
      return;
  }    
}

module.exports = JWTMiddleware;