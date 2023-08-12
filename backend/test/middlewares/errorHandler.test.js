const chai = require('chai');
const chaiHttp = require('chai-http');
const express = require('express');
const { errorHandler } = require('../../dist/src/middlewares/errorHandler'); // Replace with the actual path to your error handler

chai.use(chaiHttp);
const expect = chai.expect;

describe('Error Handler Middleware', () => {
  it('should respond with 500 status and error message', async () => {
    const app = express();
    app.use(errorHandler);

    const err = new Error('Test error message');
    const res = await chai.request(app).get('/').send(err);

    expect(res).to.have.status(500);
    expect(res.body).to.be.an('object');
    expect(res.body).to.have.property('error', 'An error occurred');
  });
});
