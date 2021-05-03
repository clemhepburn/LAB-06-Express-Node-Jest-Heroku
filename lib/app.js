import express from 'express';
import cors from 'cors';
import stuff from '../data/berries.js';


const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello again, World! hellooo');
});

app.get('/api/berries', (req, res) => {
  res.json(stuff);
});

app.get('/api/berries/1', (req, res) => {
  res.json(stuff[0]);
});

export default app;