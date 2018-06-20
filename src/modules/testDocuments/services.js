import mongodb from '../../clients/mongodb';

function createOne(data) {
  return mongodb()
    .then(db => db.collection('test').insert(data))
    .then(response => response.ops[0]);
}

export default {
  createOne,
};
