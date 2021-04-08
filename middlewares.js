const logginMiddleware = (request, response, next) => {
  console.log("Im the middleware!!");
  console.log("New request incoming ", request.method, new Date());
  next();
};

const failRandomly = (request, response, next) => {
  const fail = Math.random() * 10 > 3;
  // jwt ;kajshf;ikuasghflkjhwagFLKJHgfd.kjhaskl;djhAS;KLJDh
  if (fail) {
    console.log("Request failed by chance middleware");
    response.send("your request failed you are unlucky");
  } else {
    next();
  }
};

module.exports = { logginMiddleware, failRandomly };

// export default Component
// import React from 'react'

// import { SOMETHING } from 'constants'
// export const SOMETHING = ""

// const express = require('express')
// module.exports = express

// const { SOMETHING } = require('constants')
// const SOMETHING = ""
// module.exports = { SOMETHING }
