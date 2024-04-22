import Joi, { date } from 'joi';

const createUser = Joi.object({
  cognitoId: Joi.string().required(),
  displayName: Joi.string().min(3).max(20).required(),
  dateOfBirth: Joi.date().required(),
  email: Joi.string().email().required(),
  profilePicture: Joi.string().allow(null),
  country: Joi.string().required()
});

export default function(data) {
    return createUser.validate(data, {
        stripUnknown: true
    });
}