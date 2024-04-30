import Joi from 'joi';

const type = Joi.object({
    type: Joi.string().valid('buy', 'sell').required()
});

export default function(data) {
    return type.validate(data);
}
