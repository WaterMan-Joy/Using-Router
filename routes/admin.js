const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if (req.query.isAdmin) {
        next();
    }
    else {
        res.send('Sorry  is not admin')
    }
})

router.get('/topsecret', (req, res) => {
    res.send('TOP SECRET!!');
})
router.get('/delete', (req, res) => {
    res.send('DELETE TOP SECRET!!');
})

module.exports = router;