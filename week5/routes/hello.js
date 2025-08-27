const express = require("express");
const router = express.Router();
// Simple GET route
router.get('/', (req, res) => {
res.send('Hello from the /api/hello route!');
});
router.get('/food', (req, res) => {
res.send('Hello what would you like to order.');
});
const foodController  = require('../controllers/foodController');
router.get('/allfood', foodController.getAllFood); 
module.exports = router;