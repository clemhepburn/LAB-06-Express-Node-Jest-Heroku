import express from 'express';
import cors from 'cors';
import stuff from '../data/berries.js';


const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello again, World! hellooo');
});

app.get('/data/berries', (req, res) => {
  res.json(stuff);
});

export default app;