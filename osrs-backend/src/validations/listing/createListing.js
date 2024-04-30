import Joi from 'joi';

const createListing = Joi.object({
    minimumAmount: Joi.number().optional(),
    maximumAmount: Joi.number().optional(),
    averageDeliveryTime: Joi.number().required(),
    price: Joi.number().required(),
    stock: Joi.number().required(),
    promoted: Joi.boolean().allow(null).optional(),
    status: Joi.string().valid('pending', 'cancelled', 'completed').required()
});

export default function(data) {
    return createListing.validate(data, {
        stripUnknown: true
    });
}