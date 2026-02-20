const express = require('express');

const app = express();

app.use('/category', require('./routes/category'));
app.use('/product', require('./routes/product'));

app.listen(3000, () => {
    console.log('Server running on port 3000');
});