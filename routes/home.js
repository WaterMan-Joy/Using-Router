const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => {
    res.send('HOME!!');
})
router.get('/home/:id', (req, res) => {
    res.send('ONE HOME!!');
})
router.get('/home/:id/edit', (req, res) => {
    res.send('ONE HOME EDIT!!');
})
router.post('/home', (req, res) => {
    res.send('CREATE HOME!!');
})

module.exports = router;