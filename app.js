const express = require('express');
const homeRouter = require('./routes/home');
const dogRouter = require('./routes/dog');
const morgan = require('morgan');

const app = express();



app.use('/home', homeRouter);
app.use('/dog', dogRouter);
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('app.js');
})


app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000!');
})