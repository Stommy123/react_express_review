import express from 'express';
import axios from 'axios';

const app = express();

const isNil = item => item === undefined || item === null;

/**
 * API health check. Hit this route to verify that your server is behaving properly
 * If other routes are not working as intended, then the error lies with those routes
 * and not the server
 *
 * example - http://localhost:4000/heartbeat
 */
app.get('/heartbeat', (_, res) => {
  res.send({ ping: 'pong' });
});

/**
 * Adds two to any number provided in the params
 *
 * @param {Number} num
 *
 * example - http://localhost:4000/add-two/5
 */
app.get('/add-two/:num', (req, res) => {
  const { num } = req.params;
  const normalizedNumber = +num;

  if (isNaN(normalizedNumber)) {
    return res.send({ error: 'Input was not a number' });
  }

  res.send({ result: normalizedNumber + 2 });
});

/**
 * Multiplies any two number supplied in the query string
 *
 * @param {Number} num1
 * @param {Number} num2
 *
 * example - http://localhost:4000/multiply?num1=2&num2=3
 */
app.get('/multiply', (req, res) => {
  const { num1, num2 } = req.query;

  if (isNil(num1) || isNil(num2)) {
    return res.send({ error: 'Both num1 and num2 are required query params' });
  }

  const [normalizedNum1, normalizedNum2] = [+num1, +num2];

  if (isNaN(normalizedNum1) || isNaN(normalizedNum2)) {
    return res.send({ error: 'One or more input was not a number' });
  }

  res.send({ result: normalizedNum1 * normalizedNum2 });
});

/**
 * Retrieves a dad joke from the `icanhazdadjoke` api
 *
 * example - http://localhost:4000/joke
 */
app.get('/joke', async (_, res) => {
  const { data } = await axios.get('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  });

  res.send({ joke: data.joke });
});

const PORT = 4000;

app.listen(PORT, _ => console.log(`App is listening on port ${PORT}`));
