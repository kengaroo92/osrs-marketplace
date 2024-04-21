const express = require('express');
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

const client = jwksClient({
  jwksUri: process.env.COGNITO_USER_POOL,
  cache: true
});

const getKey = (header, callback) => {
  client.getSigningKey(header.kid, (err, key) => {
    if (err) {
      return callback(err);
    }
    if (!key) {
      return callback(new Error('No signing key found'));
    }
    const signingKey = key.getPublicKey();
    callback(null, signingKey);
  });
};

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authorization header is missing or not a Bearer token.' });
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, getKey, { algorithms: ['RS256'] }, (err, decoded) => {
    if (err) {
      const message = `Token verification failed: ${err.message}`;
      return res.status(403).json({ message });
    }
    req.user = decoded;
    next();
  });
};

export default authenticateToken;