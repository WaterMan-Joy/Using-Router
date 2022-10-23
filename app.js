const express = require('express');
const homeRouter = require('./routes/home');
const dogRouter = require('./routes/dog');
const adminRouter = require('./routes/admin');
const morgan = require('morgan');
const e = require('express');

const app = express();



app.use('/home', homeRouter);
app.use('/dog', dogRouter);
app.use('/admin', adminRouter);
app.use(morgan('dev'));
// app.use((req, res, next) => {
//     if (req.query.isAdmin) {
//         next();
//     }
//     else {
//         res.send('Sorry  is not admin')
//     }
// })

app.get('/', (req, res) => {
    res.send('app.js');
})


app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000!');
})