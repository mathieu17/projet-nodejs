import config from 'config';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import apiRouter from './api';
import notFoundMiddleware from './middleware/notFound';
import errorsMiddleware from './middleware/errors';

const app = express();

app.use(helmet());
app.use(bodyParser.json());

app.use('/api', apiRouter);

app.use(
  notFoundMiddleware,
  errorsMiddleware,
);

app.listen(config.get('port'));

export default app;
