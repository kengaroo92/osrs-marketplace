export default async function getUserRoles(req, res, next) {
    try {
        const user = await db.models.user.findByPk(req.user.id, {
            include: [
            {
                model: db.models.userRole
            }
        ]
        });

        if (user) {
            const dbRoles = user.userRoles.map(role => role.name);
            req.user.roles = dbRoles;
        }

        next();
    } catch (error) {
        console.error('Error fetching user roles:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
