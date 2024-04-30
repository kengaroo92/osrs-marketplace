import db from '../config/initialize_db.js';
import validateInput from '../validations/listing/createListing.js';
import validateTypeInput from '../validations/listing/type.js';

export default async function({ type, user, body }) {
    const { error: typeError } = validateTypeInput(type);
    if (typeError) {
        return { status: 500, response: 'Internal server error, invalid listing type' };
    }

    const { error: listingError } = validateInput(body);
    if (listingError) {
        return { status: 400, response: 'Internal server error. Invalid listing body' };
    }

    try {
        const existingListing = await db.models[type].findOne({
            where :{
                userId: user.id,
                status: 'pending',
                type,
                price: body.price
            }
        });

        if (existingListing) {
            return { status: 400, response: 'An active listing already exists' };
        }

        const listing = await db.models[type].create({
            ...body,
            userId: user.id
        });

        return res.status(201).json(listing);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}