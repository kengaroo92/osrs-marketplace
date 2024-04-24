import Joi from 'joi';

const readUser = Joi.object({
  id: Joi.number().required(),
  cognitoId: Joi.string().required(),
  displayName: Joi.string().min(3).max(20).required(),
  dateOfBirth: Joi.date().required(),
  email: Joi.string().email().required(),
  profilePicture: Joi.string().allow(null).required(),
  country: Joi.string().required(),
  balance: Joi.number().required(),
  isVerified: Joi.boolean().required()
});

export default function(data) {
    return readUser.validate(data, {
        stripUnknown: true
    });
}