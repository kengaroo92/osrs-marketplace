export default function checkRoles(requiredRoles) {
    return async function(req, res, next) {
        try {
            const userRoles = req.user.roles;
            const hasRequiredRole = userRoles.some(role => requiredRoles.includes(role) || role === 'Admin');

            if (!hasRequiredRole) {
                return res.status(403).json({ message: 'You do not have permission to access this resource.' });
            }

            next();
        } catch (error) {
            console.error('Error checking roles:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    };
}
