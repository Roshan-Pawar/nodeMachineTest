const express = require('express');
const db = require('../db');
const router = express.Router();

// CREATE PRODUCT
router.post('/', (req, res) => {
    const { product_name, category_id } = req.body;

    db.query(
        'INSERT INTO product (product_name, category_id) VALUES (?, ?)',
        [product_name, category_id],
        (err, result) => {
            if (err) return res.status(500).send(err);
            res.send('Product Created');
        }
    );
});

// READ PRODUCTS WITH PAGINATION + JOIN
router.get('/', (req, res) => {

    const page = parseInt(req.query.page) || 1;
    const pageSize = 10;

    const offset = (page - 1) * pageSize;

    const query = `
        SELECT p.product_id,
               p.product_name,
               c.category_id,
               c.category_name
        FROM product p
        JOIN category c ON p.category_id = c.category_id
        LIMIT ? OFFSET ?
    `;

    db.query(query, [pageSize, offset], (err, products) => {
        if (err) return res.status(500).send(err);

        db.query('SELECT * FROM category', (err, categories) => {
            if (err) return res.status(500).send(err);

            res.render('product', {
                products,
                categories,
                page
            });
        });
    });
});

// UPDATE
router.put('/:id', (req, res) => {
    db.query(
        'UPDATE product SET product_name=?, category_id=? WHERE product_id=?',
        [req.body.product_name, req.body.category_id, req.params.id],
        (err, result) => {
            if (err) return res.status(500).send(err);
            res.send('Product Updated');
        }
    );
});

// DELETE
router.post('/delete/:id', (req, res) => {
    db.query(
        'DELETE FROM product WHERE product_id=?',
        [req.params.id],
        (err) => {
            if (err) return res.status(500).send(err);
            res.redirect('/product');
        }
    );
});

module.exports = router;