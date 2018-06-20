import joi from 'joi';
import clients from '../../clients';
import model from './models';

function createOne(data) {
  return joi.validate(data, model).then(validatedData => clients.mongodb()
    .then(db => db.collection('test').insert(validatedData))
    .then(response => response.ops[0]));
}

export default {
  createOne,
};
