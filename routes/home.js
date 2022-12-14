const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('HOME!!');
})
router.get('/:id', (req, res) => {
    res.send('ONE HOME!!');
})
router.get('/:id/edit', (req, res) => {
    res.send('ONE HOME EDIT!!');
})
router.post('/', (req, res) => {
    res.send('CREATE HOME!!');
})

module.exports = router;