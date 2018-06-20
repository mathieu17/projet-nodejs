import joi from 'joi';
import { expect } from 'chai';
import model from './models';

describe('model', () => {
  describe('where somthing went wrong', () => {
    it('should catch if model is not valid', (done) => {
      const data = {
        country: 'FR',
      };

      joi.validate(data, model).catch(() => {
        done();
      });
    });
  });


  describe('When all is allright', () => {
    it('should be a joi schema', () => {
      expect(model).to.be.an('object');
    });
    it('should works', () => {
      const data = {
        firstName: 'Sarah',
        lastName: 'Bolo',
      };

      return joi.validate(data, model);
    });
  });
});
