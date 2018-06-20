import joi from 'joi';
import { expect } from 'chai';
import model from './models';

describe('model', () => {
  it('should be a joi schema', () => {
    expect(model).to.be.an('object');
  });

  it('should catch if model is not valid', (done) => {
    const data = {
      country: 'FR',
    };

    joi.validate(data, model).catch(() => {
      done();
    });
  });

  it('should works', () => {
    const data = {
      firstName: 'Sarah',
      lastName: 'Bolo',
    };

    return joi.validate(data, model);
  });
});
