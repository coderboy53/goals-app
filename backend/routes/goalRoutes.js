const express = require('express')
const router = express.Router();
const {getGoals, setGoals, updateGoals, deleteGoals} = require("../controllers/goalController");

const { protect } = require('../middleware/authMiddleware')

// router.get('/', getGoals)

// router.post('/', setGoals)
// to reduce LOC can be reduced to 
router.route('/').get(protect, getGoals).post(protect, setGoals);

// router.put('/:id', updateGoals)

// router.delete('/:id', deleteGoals)
// to reduce LOC can be reduced to
router.route('/:id').put(protect, updateGoals).delete(protect, deleteGoals);

module.exports = router