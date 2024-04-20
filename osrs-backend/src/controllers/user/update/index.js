import db from '../../../config/initialize_db.js';
import validateInput from '../../../validations/user/updateUser.js';

export default async function(req, res) {
    const { body, user } = req;
    const { error } = validateInput(body);

    if (error) {
        return res.status(400).json(error);
    }
    
    try {
        const existingUser = await db.models.user.findByPk(user.id);

        if (!existingUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        await existingUser.update(body);
        return res.status(200).json(existingUser);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}