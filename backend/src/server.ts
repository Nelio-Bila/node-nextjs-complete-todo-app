import express from 'express';
import bodyParser from 'body-parser';
import todoRoutes from './routes/todoRoutes';

const app = express();

app.use(bodyParser.json());

app.use('/api/v1', todoRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
