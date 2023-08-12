// import express from 'express';
// import bodyParser from 'body-parser';
// import todoRoutes from './routes/todoRoutes';
// import cors from 'cors';

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());

// app.use('/api/v1', todoRoutes);

// const PORT = process.env.PORT || 5001;

// const server = app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// export default server;

import express from 'express';
import bodyParser from 'body-parser';
import todoRoutes from './routes/todoRoutes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1', todoRoutes);

const PORT = process.env.PORT || 5001;

if (require.main === module) {
  const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  module.exports = server;
}
