const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');

// Define routes
router.get('/', (req, res) => {
    res.send('Welcome to the iDT-Safety-Prototype');
});

// Example CRUD routes
router.get('/items', controller.getAllItems);
router.post('/items', controller.createItem);
router.get('/items/:id', controller.getItemById);
router.put('/items/:id', controller.updateItem);
router.delete('/items/:id', controller.deleteItem);

module.exports = router;