module.exports = {
    handleError: (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    },
    formatResponse: (data) => {
        return {
            success: true,
            data: data,
        };
    },
    formatError: (message) => {
        return {
            success: false,
            message: message,
        };
    }
};