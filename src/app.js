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
    .then((response) => {
      res.send(response);
    })
    .catch(err => next(err));
});

app.listen(config.get('port'));

export default app;
