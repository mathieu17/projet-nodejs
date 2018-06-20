import express from 'express';
import bodyParser from 'body-parser';
import config from 'config';

import mongodb from './clients/mongodb';
import testDocumentsServices from './modules/testDocuments/services';

const app = express();

app.use(bodyParser.json());

app.use('/api*', (req, res, next) => {
  res.set('Content-Type', 'application/json');

  next();
});

app.get('/', (req, res) => {
  res.send('Hello World');
});


app.get('/api/testDocuments', (req, res) => {
  mongodb().then((db) => {
    db.collection('test')
      .find({})
      .toArray((findErr, docs) => {
        res.send(docs);
      });
  });
});

app.post('/api/testDocuments', (req, res, next) => {
  testDocumentsServices
    .createOne(req.body)
    .then(response => res.send(response))
    .catch(err => next(err));
});

app.use((req, res, next) => {
  const error = new Error(`Not found for ressource${req.url}`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  if (err.status === 404) {
    return res.status(404).send({
      name: err.name,
      ressource: req.url,
      message: err.message,
      errorCode: 'NOT_FOUND',
      status: err.status,
      stack: err.stack,
    });
  }

  if (err.isJoi) {
    return res.status(400).send({
      name: err.name,
      ressource: req.url,
      message: err.message,
      details: err.details,
      errorCode: 'BAD_PARAMETERS',
      status: err.status,
      stack: err.stack,
    });
  }

  return res.status(500).send({
    name: err.name,
    ressource: req.url,
    message: err.message,
    errorCode: 'SERVER_ERROR',
    status: err.status,
    stack: err.stack,
  });
});

app.listen(config.get('port'));

export default app;
