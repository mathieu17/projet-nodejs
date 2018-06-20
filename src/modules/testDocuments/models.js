import joi from 'joi';

const model = joi.object().keys({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  age: joi.number().default(18),
});

export default model;
