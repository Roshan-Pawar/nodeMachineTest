const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/category', require('./routes/category'));
app.use('/product', require('./routes/product'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.send('node server is running');
})


app.listen(3000, () => {
    console.log('Server running on port 3000');
});