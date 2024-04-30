import Joi from 'joi';

const listUserSchema = Joi.object({
  cognitoId: Joi.string().required(),
  displayName: Joi.string().min(3).max(20).required(),
  dateOfBirth: Joi.date().required(),
  email: Joi.string().email().required(),
  profilePicture: Joi.string().allow(null),
  country: Joi.string().required(),
  isVerified: Joi.boolean().required()
});

const listUsers = Joi.array().items(listUserSchema);

export default function(data) {
    return listUsers.validate(data, {
        stripUnknown: true
    });
}
