const jwt = require('jsonwebtoken');

const roleRight = {
    admin: ['getAllUser', 'getUserById', 'addUser', , 'deleteUserById', 'updateUserById', 'getAllTodo', 'getTodoById', 'getAllTodoByUserId', 'AddTodo', 'deleteTodoById', 'updateTodoById', 'deleteAllTodo'],
    user: ['getUserById', 'deleteUserById', 'updateUserById', 'AddTodo', 'getAllTodoByUserId',  'getTodoById', 'updateTodoById', 'deleteTodoById'],
}

const auth = (requiredRight) => async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const userRole = decoded.role;
        if (roleRight[userRole].includes(requiredRight)) {
            next();
        } else {
            res.status(403).json({
                message: 'Forbidden'
            });
        }
    } catch (error) {
        res.status(401).json({
            message: 'Unauthorized'
        });
    }
}

module.exports = auth;

