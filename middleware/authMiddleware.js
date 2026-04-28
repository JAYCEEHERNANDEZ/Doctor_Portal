const authMiddleware = (req, res, next) => {
    req.token = "test-token"; // fake token
    next();
};

export default authMiddleware;