import db from '../../../config/initialize_db.js';
import validateOutput from '../../../validations/user/readUser.js';

export default async function(req, res) {
    const { user } = req;
    try {
        const existingUser = await db.models.user.findByPk(user.id);

        if (!existingUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        const { error } = validateOutput(existingUser.dataValues);

        if (error) {
            return res.status(400).json(error);
        }

        return res.status(200).json(existingUser);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}