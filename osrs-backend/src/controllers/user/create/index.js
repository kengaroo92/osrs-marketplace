import db from '../../../config/initialize_db.js';
import validateInput from '../../../validations/user/createUser.js';

export default async function(req, res) {
    const { body } = req;
    const { error } = validateInput(body);

    if (error) {
        return res.status(400).json(error);
    }
    
    try {
        const existingUser = await db.models.user.findOne({
            where: {
                email: body.email
            }
        });
    
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
    
        const user = await db.models.user.create(body);
        return res.status(201).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}