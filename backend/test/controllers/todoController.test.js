const chai = require('chai');
const chaiHttp = require('chai-http');
const { PrismaClient } = require('@prisma/client');
const { app } = require('../../dist/src/server'); // Make sure to import your Express app instance here

chai.use(chaiHttp);
const expect = chai.expect;
const prisma = new PrismaClient();

describe('Todo Controller Tests', () => {
  before(async () => {
    // Seed your database or perform necessary setup before tests
  });

  after(async () => {
    // Clean up or reset the database after tests
    await prisma.$disconnect();
  });

  describe('GET /todos', () => {
    it('should get all todos', async () => {
      const res = await chai.request("http://localhost:5001").get('/api/v1/todos');
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      expect(res.body.todos).to.be.an('array');
    });
  });

  describe('GET /todos/:id', () => {
    it('should get a single todo by ID', async () => {
      // Assuming you have a todo ID from your seed or setup
      const todoId = 'your_todo_id_here';
      const res = await chai.request("http://localhost:5001").get(`/api/v1/todos/${todoId}`);
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
    });

    it('should return 404 for non-existing todo', async () => {
      const nonExistingTodoId = 'non_existing_todo_id';
      const res = await chai.request("http://localhost:5001").get(`/api/v1/todos/${nonExistingTodoId}`);
      expect(res).to.have.status(404);
    });
  });

  describe('POST /todos', () => {
    it('should create a new todo', async () => {
      const newTodo = {
        title: 'New Todo',
        description: 'This is a new todo item.',
        completed: false,
      };
      const res = await chai.request("http://localhost:5001").post('/api/v1/todos').send(newTodo);
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      expect(res.body.title).to.equal(newTodo.title);
      expect(res.body.description).to.equal(newTodo.description);
      expect(res.body.completed).to.equal(newTodo.completed);
    });
  });

  // Similar tests for PUT and DELETE routes can be added here

});
