const express = require('express');
const homeRouter = require('./routes/home');

const app = express();

app.use('/', homeRouter);

app.get('/', (req, res) => {
    res.send('app.js');
})


app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000!');
})