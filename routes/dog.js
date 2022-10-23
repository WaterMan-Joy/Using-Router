const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('DOG!')
})
router.get('/:id', (req, res) => {
    res.send('ONE DOG!')
})
router.get('/:id/edit', (req, res) => {
    res.send('ONE EDIT DOG!')
})
router.post('/', (req, res) => {
    res.send('POST DOG!')
})

module.exports = router;