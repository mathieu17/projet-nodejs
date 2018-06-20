import { MongoClient } from 'mongodb';
import config from 'config';

const {
  url,
  name,
} = config.get('database');

export default function () {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, (err, client) => {
      if (err) reject(err);

      resolve(client.db(name));
    });
  });
}
