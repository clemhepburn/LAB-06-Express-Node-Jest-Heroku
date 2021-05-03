import app from '../lib/app.js';
import supertest from 'supertest';
const request = supertest(app);

// If a GET reqest is made to /api/cats
// does the server respond with status of 200
// and body matching the cats data?
test('GET /data/berries', async () => {
  const expected = [
    {
      name: 'lamp',
      type: 'furniture',
      color: 'brown'
    },
    {
      name: 'radio',
      type: 'furniture',
      color: 'brown'
    },
    {
      name: 'bouquet',
      type: 'plant',
      color: 'green'
    },
    {
      name: 'books',
      type: 'things',
      color: 'green'
    },
    {
      name: 'poem',
      type: 'art',
      color: 'blue'
    },
    {
      name: 'rug',
      type: 'textiles',
      color: 'white'
    },
    {
      name: 'blanket',
      type: 'textiles',
      color: 'blue'
    },
    {
      name: 'curtain',
      type: 'textiles',
      color: 'white'
    },
    {
      name: 'desk',
      type: 'furniture',
      color: 'brown'
    },
    {
      name: 'yoga mat',
      type: 'things',
      color: 'green'
    },
    {
      name: 'computer',
      type: 'things',
      color: 'gray'
    }
  ];

  const response = await request.get('/data/berries');

  expect(response.status).toBe(200); // 200 = OK
  expect(response.body).toEqual(expected);

});