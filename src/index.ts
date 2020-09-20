import dotenv from 'dotenv';
import express from 'express';
import routes from './routes/';

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(routes);
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
