import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).send({ message: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        console.log(payload);

        req.user = payload;

        next();
    } catch (e) {
        return res.status(401).send({ message: 'Unauthorized' });
    }
};

export default authMiddleware;
