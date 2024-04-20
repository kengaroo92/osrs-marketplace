const express = require('express');
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

const client = jwksClient({
  jwksUri: process.env.COGNITO_USER_POOL
});

const getKey = (header, callback) => {
  client.getSigningKey(header.kid, (err, key) => {
    if (!key) {
      return callback(err);
    }
    const signingKey = key.getPublicKey();
    callback(null, signingKey);
  });
};

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];

  if (!token) {
    res.sendStatus(401);
    return;
  }

  jwt.verify(token, getKey, { algorithms: ['RS256'] }, (err, decoded) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = decoded;
    next();
  });
};
