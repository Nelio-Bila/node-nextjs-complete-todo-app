# Todo App

A simple Todo App built with a frontend Next js application and a backend Node.js server.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Backend](#backend)
  - [API Routes](#api-routes)
  - [Environment Variables](#environment-variables)
- [Frontend](#frontend)
  - [Folder Structure](#folder-structure)
  - [Environment Variables](#environment-variables-1)
- [Running the Application](#running-the-application)

## Features

- Add, update, delete, and mark todos as completed.
- Filter todos by status (all, active, completed).
- Drag and drop to reorder todos.
- Dark mode support.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Nelio-Bila/node-nextjs-complete-todo-app.git
   cd todo-app

## Backend

The backend of the application is built using Node.js and Express. It provides API endpoints to interact with the todos.

### API Routes

- `GET /api/todos`: Fetch all todos.
- `POST /api/todos`: Create a new todo.
- `PUT /api/todos/:id`: Update a todo's title and completion status.
- `DELETE /api/todos/:id`: Delete a todo by ID.

### Environment Variables

Create a `.env` file in the `backend` directory with the following environment variables:

PORT=3001
DATABASE_URL="postgresql://username:password@localhost:5432/databasename?schema=public"

## Frontend

The frontend of the application is built using Next.js with Tailwind CSS for styling. It allows users to manage and organize their todos.

### Folder Structure

The frontend code is organized as follows:

- `public`: Contains static assets.
- `src`:
    - `api`: Defines API functions to communicate with the backend.
    - `components`: Contains reusable React components.
    - `cypress`:
        - `fixtures`: Contains mock data.
        - `integration`: Contains Cypress test files.
        - `plugins`: Contains Cypress plugins.
        - `support`: Contains support files for tests.
    - `pages`: Contains the main application pages.
    - `styles`: Contains global styles and Tailwind CSS configuration.

### Environment Variables

Create a `.env` file in the `frontend` directory with the following environment variables:

NEXT_PUBLIC_BACKEND_URL=http://localhost:5001/api/v1

### Running Tests

## Backtend
To run unit tests, for the backend use the following command:

```bash
npm run test

## Frontend
To run the e2e Cypress tests, for the frontend use the following command:

```bash
npx cypress open