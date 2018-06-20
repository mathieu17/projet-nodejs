import joi from 'joi';
import mongodb from '../../clients/mongodb';
import model from './models';

function createOne(data) {
  return joi.validate(data, model).then(validatedData => mongodb()
    .then(db => db.collection('test').insert(validatedData))
    .then(response => response.ops[0]));
}

export default {
  createOne,
};
