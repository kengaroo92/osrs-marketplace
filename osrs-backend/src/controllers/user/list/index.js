import db from '../../../config/initialize_db.js';
import validateOutput from '../../../validations/user/listUser.js';

export default async function(req, res) {
    const { page, pageSize } = req.query;

    try {
        const users = await db.models.user.findAndCountAll({
            limit: pageSize,
            offset: (page - 1) * pageSize
        });

        const { error } = validateOutput(users);
        if (error) {
            return res.status(400).json(error);
        }

        return res.status(200).json(users);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}