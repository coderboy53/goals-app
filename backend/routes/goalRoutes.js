const express = require('express')
const router = express.Router();
const {getGoals, setGoals, updateGoals, deleteGoals} = require("../controllers/goalController");



// router.get('/', getGoals)

// router.post('/', setGoals)
// to reduce LOC can be reduced to 
router.route('/').get(getGoals).post(setGoals);

// router.put('/:id', updateGoals)

// router.delete('/:id', deleteGoals)
// to reduce LOC can be reduced to
router.route('/:id').put(updateGoals).delete(deleteGoals);

module.exports = router