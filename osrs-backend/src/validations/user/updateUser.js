import Joi from 'joi';

const updateUser = Joi.object({
  profilePicture: Joi.string().allow(null),
  isVerified: Joi.boolean()
});

export default function(data) {
    return updateUser.validate(data, {
        stripUnknown: true
    });
}