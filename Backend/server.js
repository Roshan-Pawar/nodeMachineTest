const express = require('express');

const app = express();

app.use(express.json());

app.use('/category', require('./routes/category'));
app.use('/product', require('./routes/product'));

app.get('/', (req, res) => {
    res.send('node server is running');
})


app.listen(3000, () => {
    console.log('Server running on port 3000');
});